import React from 'react';
import axios from "axios";
import './Widget.css';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      city2: ""
    };
  }

  getWeather = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Weather/" + document.getElementById("searchW").value + "")
      .then(res => {
        this.setState({
          city: res.data.current.temperature + "°"
        });
      })
      .catch(err =>	{
        console.log(err);
      });
    }
  }

  getWeather2 = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Weather/" + document.getElementById("searchW2").value + "")
      .then(res => {
        this.setState({
          city2: res.data.current.temperature + "°"
        });
      })
      .catch(err =>	{
        console.log(err);
      });
    }
  }

  sayHello = () => {
    alert("weather");
  };

  render() {
    
    if (this.props.nbr === true) {
      return (
        <div className="widgetm">
          
          <div className="header">
            <input type="text" id="searchW" placeholder="City" onKeyPress={this.getWeather}/>
            <DeviceThermostatIcon sx={{ color: '#a0c4ff' }}/>
          </div>
          <p>{this.state.city}</p>
          <div className="iconSearch">
            <p>Weather - temperature</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="widgetm">
          <div className="header">
            <input type="text" id="searchW2" placeholder="City" onKeyPress={this.getWeather2}/>
            <DeviceThermostatIcon sx={{ color: '#a0c4ff' }}/>
          </div>
          <p>{this.state.city2}</p>
          <div className="iconSearch">
            <p>Weather - temperature</p>
          </div>
        </div>
      )
    }
  }
}

export default Weather;
