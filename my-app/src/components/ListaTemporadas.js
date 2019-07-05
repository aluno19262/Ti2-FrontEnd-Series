import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/temporadas.css';


class ListaTemporadas extends Component {

  render() {
    console.log(this.props.temporada)
    return this.props.temporada.map((temporada) => (

      <Link to={`/Episodios/${temporada.id}`}>
        <div >
          <img key={temporada.id} src={'../Imagens/' + temporada.foto} alt="../Imagens/ALT.png"></img>
          <p>{temporada.nome} </p>
        </div>
      </Link>
    ));
  }
}
export default ListaTemporadas;