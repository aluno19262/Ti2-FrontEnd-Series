import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Series from './components/Series';
import Temporadas from './components/Temporadas';
import Episodios from './components/Episodios';
import Editoras from './components/Editoras';
import Pessoas from './components/Pessoas';



class App extends Component {
  
state={
  valor:"HOME"
}

  render(){

    return (
<Router>
      <div className="App">
      <Header valor={this.state.valor}></Header>   
    </div>


    <Route path="/Series" component={Series}></Route> 
    <Route path="/Temporadas/:id" component={Temporadas}></Route>    
    <Route path="/Episodios" component={Episodios}></Route>
    <Route path="/Editoras" component={Editoras}></Route>
    <Route path="/Pessoas" component={Pessoas}></Route>


</Router>


  );
    
  }
  
}

export default App;
