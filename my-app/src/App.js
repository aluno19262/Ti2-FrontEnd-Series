import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';



class App extends Component {
  
state={
  valor:"HOME"
}

  render(){

    return (

    <div className="App">
      <Header valor={this.state.valor}></Header>   
    </div>

  );
    
  }
  
}

export default App;
