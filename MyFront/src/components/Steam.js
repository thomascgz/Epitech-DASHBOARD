import React from 'react';
import axios from "axios";
import './Widget.css';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

class Steam extends React.Component {
  constructor() {
    super();
    this.state = {
      steam: "",
      steam2: ""
    };
  }

  getSteam = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Steam/" + document.getElementById("searchS").value + "")
      .then(res => {
        this.setState({
          steam: res.data.response.player_count + " players"
        });
      })
  	  .catch(err =>	{
        console.log(err);
      });
    }
  }

  getSteam2 = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/Steam/" + document.getElementById("searchS2").value + "")
      .then(res => {
        this.setState({
          steam2: res.data.response.player_count + " players"
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
        <div className="widgets">
          <div className="header">
            <input type="text" id="searchS" placeholder="Game" onKeyPress={this.getSteam}/>
            <span><SportsEsportsIcon sx={{ color: '#bdb2ff' }}/></span>
          </div>
          <p>{this.state.steam}</p>
          <div className="iconSearch">
            <p>Steam - number players</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="widgets">
          <div className="header">
            <input type="text" id="searchS2" placeholder="Game" onKeyPress={this.getSteam2}/>
            <span><SportsEsportsIcon sx={{ color: '#bdb2ff' }}/></span>
          </div>
          <p>{this.state.steam2}</p>
          <div className="iconSearch">
            <p>Steam - number players</p>
          </div>
        </div>
      )
    }
  }
}

export default Steam;
