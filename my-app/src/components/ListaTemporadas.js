import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/temporadas.css';


class ListaTemporadas extends Component {

  render() {
    console.log(this.props.serie)
    return (
      this.props.temporada.map((temporada) => (
        <div className="temporada_wrapper">
          {/* ,state:{id:this.props.id.id} */}
          <Link to={{pathname:`/Episodios/${temporada.id}`,state:{serie:this.props.serie}}} >
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