import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/Episodios.css';


class ListaEpisodios extends Component {

  render() {
    if (this.props.episodio.lenght === 0) {
      return (
        <p>Não existem episodios para esta temporada</p>
      );
    } else {
      return this.props.episodio.map((episodio) => (
        <div className="episodios_wrapper">
          <Link to={{pathname:`/EpisodiosDetails/${episodio.id}`,state:{temporadaid:this.props.temporadaid}}}>
            <div className="episodios_content">
              <div className="episodios_content_numero">
                <span> Episódio {episodio.numero} </span>
              </div>
              <div className="episodios_content_img">
                <img key={episodio.id} src={"../Imagens/" + episodio.foto} alt="Não existe foto"></img>
              </div>
              <div className="episodios_content_nome">
                <span>{episodio.nome} </span>
              </div>
            </div>
          </Link>
        </div>
      ));
    }

  }
}
export default ListaEpisodios;