import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Series from './components/Series';
import Temporadas from './components/Temporadas';
import Episodios from './components/Episodios';
import Editoras from './components/Editoras';
import Pessoas from './components/Pessoas';
import Papeis from './components/Papeis';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";


class App extends Component {
  
state={
  valor:"HOME"
}

  render(){

    return (
      <Router>
    <div className="App">
      <Header valor={this.state.valor}></Header>
     

      <Route path="/Temporadas/" component={Temporadas} />
      <Route path="/Series/" component={Series} />
      <Route path="/Episodios/" component={Episodios} />

      {/* <Series></Series> */}
      {/* <Temporadas></Temporadas> */}
      {/* <Episodios></Episodios> */}
      {/* <Editoras></Editoras> */}
      {/* <Pessoas></Pessoas> */}
      {/* <Papeis></Papeis> */}

      
    </div>
    </Router>
  );
    
  }
  
}

export default App;
