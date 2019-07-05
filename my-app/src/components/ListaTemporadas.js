import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/temporadas.css';


class ListaTemporadas extends Component {

  render() {
    console.log(this.props.temporada)
    return (
      this.props.temporada.map((temporada) => (
        <div className="temporada_wrapper">
          <Link to={`/Episodios/${temporada.id}`}>
            <div className="temporada_content">
              <div className="temporada_content_numero">
                <span>Temporada {temporada.numero}</span>
              </div>
              <div className="temporada_content_img">
                <img key={temporada.id} src={'../Imagens/' + temporada.foto} alt="../Imagens/ALT.png"></img>
              </div>
              <div className="temporada_content_info">
                <span>{temporada.nome} </span>
              </div>
            </div>
          </Link>
        </div>
      )
      ));
  }
}
export default ListaTemporadas;