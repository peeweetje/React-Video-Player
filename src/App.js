import React, { Component } from 'react';
import VideoPlayer from './components/video_player';
import DataTicker from './components/data_ticker';
import Goals from './components/goals';
import Card from './components/card';
import EndHalf from './components/end_half';
import './App.css';







class App extends Component {

  state = {
    data:[]
  }

  

  componentDidMount() {
    fetch('http://localhost:3001/data')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson});
     // console.log(responseJson)
    
    })
    .catch((error) => {
      console.error(error);
    });

  }




  render() {
    return (
      <div className="App">
      <VideoPlayer  />
      <DataTicker data={this.state.data} />
      <Goals   data={this.state.data} />
      <Card data={this.state.data} />
      <EndHalf data={this.state.data} />
      </div>
    );
  }
}

export default App;
