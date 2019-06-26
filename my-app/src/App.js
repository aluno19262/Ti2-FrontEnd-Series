import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Series from './components/Series';
import Temporadas from './components/Temporadas';
import Episodios from './components/Episodios';
import Editoras from './components/Editoras';
import Pessoas from './components/Pessoas';
import Papeis from './components/Papeis';


class App extends Component {
  
state={
  valor:"Episódios"
}

  render(){

    return (
    <div className="App">
      <Header valor={this.state.valor}></Header>
      {/* <Series></Series> */}
      {/* <Temporadas></Temporadas> */}
      {/* <Episodios></Episodios> */}
      {/* <Editoras></Editoras> */}
      {/* <Pessoas></Pessoas> */}
      <Papeis></Papeis>
    </div>
  );
    
  }
  
}

export default App;
