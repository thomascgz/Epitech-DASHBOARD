import React from 'react';
import axios from "axios";
import './Widget.css';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: "",
      movie2: ""
    };
  }

  getMovies = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Movies/" + document.getElementById("searchM").value + "")
      .then(res => {
        this.setState({
          movie: res.data.results[0].overview
        });
      })
  		.catch(err =>	{
        console.log(err);
      });
    }
  }

  getMovies2 = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Movies/" + document.getElementById("searchM2").value + "")
      .then(res => {
        this.setState({
          movie2: res.data.results[0].overview
        });
      })
  		.catch(err =>	{
        console.log(err);
      });
    }
  }

  render() {
    if (this.props.nbr === true) {
      return (
        <div className="widgetf">
          <div className="header">
            <input type="text" id="searchM" placeholder="Movie" onKeyPress={this.getMovies}/>
            <span><LocalMoviesIcon sx={{ color: '#ffd6a5' }}/></span>
          </div>
          <p>{this.state.movie}</p>
          <div className="iconSearch">
            <p>Movies - overview</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="widgetf">
          <div className="header">
            <input type="text" id="searchM2" placeholder="Movie" onKeyPress={this.getMovies2}/>
            <span><LocalMoviesIcon sx={{ color: '#ffd6a5' }}/></span>
          </div>
          <p>{this.state.movie2}</p>
          <div className="iconSearch">
            <p>Movies - overview</p>
          </div>
        </div>
      )
    }
  }
}

export default Movies;
