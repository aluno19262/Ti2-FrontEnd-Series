import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Series from './components/Series';
import Temporadas from './components/Temporadas';
import Episodios from './components/Episodios';
import EpisodiosDetails from './components/EpisodiosDetails';
import Editoras from './components/Editoras';
import Pessoas from './components/Pessoas';
import EditoraCreate from './components/EditoraCreate';
import EditoraUpdate from './components/EditoraUpdate';


class App extends Component {

  //simbolo para o home button

  state = {
    valor: "🏠"
  }

  /*
      Render : chamada do componente Header para montar o header da página
              declaração de todas as rotas da app
  */

  render() {
    return (
      <Router>
        <div className="App">
          <Header valor={this.state.valor}></Header>
        </div>
        <Route path="/Series" component={Series}></Route>
        <Route path="/Serie/:id/Temporadas" component={Temporadas}></Route>
        <Route path="/Temporada/:id/Episodios" component={Episodios}></Route>
        <Route path="/Episodio/:id/EpisodiosDetails" component={EpisodiosDetails}></Route>
        <Route path="/Editoras" component={Editoras}></Route>
        <Route path="/Pessoas" component={Pessoas}></Route>
        <Route path="/Editora/Create" component={EditoraCreate}></Route>
        <Route path="/Editora/Update" component={EditoraUpdate}></Route>
        <Route path="/" ></Route>
      </Router>
    );
  }
}

export default App;
