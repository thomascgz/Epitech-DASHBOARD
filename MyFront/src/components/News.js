import React from 'react';
import axios from "axios";
import './Widget.css';
import FeedIcon from '@mui/icons-material/Feed';

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: "",
      news2: ""
    };
  }

  getNews = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/News/" + document.getElementById("searchN").value + "")
      .then(res => {
        this.setState({
          news: res.data.articles[0].title
        });
      })
  		.catch(err =>	{
        console.log(err);
      });
    }
  }

  getNews2 = (e) => {
    var x = e.which || e.keyCode;
    if (x === 13) {
      axios.get("/News/" + document.getElementById("searchN2").value + "")
      .then(res => {
        this.setState({
          news2: res.data.articles[0].title
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
        <div className="widgetn">
          <div className="header">
            <input type="text" id="searchN" placeholder="Subject" onKeyPress={this.getNews}/>
            <span><FeedIcon sx={{ color: '#caffbf' }}/></span>
          </div>
          <p>{this.state.news}</p>
          <div className="iconSearch">
            <p>News - last article</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="widgetn">
          <div className="header">
            <input type="text" id="searchN2" placeholder="Subject" onKeyPress={this.getNews2}/>
            <span><FeedIcon sx={{ color: '#caffbf' }}/></span>
          </div>
          <p>{this.state.news2}</p>
          <div className="iconSearch">
            <p>News - last article</p>
          </div>
        </div>
      )
    }
  }
}

export default News;
