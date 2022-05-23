const express = require('express');
const axios = require('axios');
const firebase = require('firebase')
const bodyParser = require("body-parser");
const about = require('./about.json')
const ip = require("ip");
const app = express();

var list;
var count = 0;

firebase.initializeApp ({
  apiKey: "AIzaSyAAAiXAOuK48-J7hp3BZXkmhJE25E1E-zg",
  authDomain: "dashboard-project-c858f.firebaseapp.com",
  databaseURL: "https://dashboard-project-c858f-default-rtdb.firebaseio.com/"
});

let database = firebase.database();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function() {
  console.log('listening on 8080')
})

app.get('/about.json', async (req,res) => {
    about.client.host = ip.address()
    about.server.current_time = Math.floor(Date.now() / 1000)
    res.status(200).json(about);
})

app.get('/test', async (req,res) => {
    database.ref("users").once("value")
    .then(function(snapshot) {
    res.send( snapshot.val() )
    })
})

app.post('/SignUp', async (req, res) => {
    count += 1;
    database.ref("users/" + count.toString()).set({
        password: req.body.password,
        username: req.body.username
    });
    res.send("ca marche")
})

let usersRef = firebase.database().ref();
var datta;
var msg;

app.post('/SignIn', async (req, res) => {
  let user = req.body.username;
  let pass = req.body.password;
  await database.ref("users").once("value")
    .then(function(snapshot) {
      datta = snapshot.val()
      usersRef.child('users').orderByChild('username').equalTo(user).on("value", function(snapshot) {
        snapshot.forEach(function(data) {
            key = parseInt(data.key)
        });
          if (user === datta[key].username && pass === datta[key].password) {
            msg = true;
          } else {
            msg = false;
          }
      });
    })
  res.send(msg)
})

app.get('/List', async (req,res) => {
    await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/').then(resp => {
        list = resp.data.applist.apps;
        res.status(200)
    });
})

app.get('/Weather/:id', async (req, res) => {
    await axios.get('http://api.weatherstack.com/current', { params: { access_key: '52c54afe935e659f05b46baaaf17d67e',  query: req.params.id} }).then(resp => {
        res.status(200).json(resp.data);
    })
})

app.get('/News/:id', async(req, res) => {
    await axios.get('https://newsapi.org/v2/everything', { params: { q: req.params.id, apikey: '48512b471b474141abbc5343c5d5ef78'} }).then(resp => {
        res.status(200).json(resp.data);
    })
})

app.get('/Movies/:id', async(req, res) => {
    await axios.get('https://api.themoviedb.org/3/search/movie', { params: {api_key: 'a16210ceb323cddf3f1b279685eded44', query: req.params.id } }).then(resp => {
        res.status(200).json(resp.data);
    })
})

app.get('/Steam/:id', async(req, res) => {
    const id = req.params.id;
    let game = list.find(el => el.name === id);
    await axios.get('https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1', { params: {appid: game.appid} }).then(resp => {
        res.status(200).json(resp.data);
    });
})
