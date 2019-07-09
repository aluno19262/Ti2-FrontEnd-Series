import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/Episodios.css';
import { linkApi } from './Series';


class ListaEpisodios extends Component {

/*
    Render: avalia se existem episódios, se nao tiver episódios : 
                  - devolve um paragrafo a informar que não há episódios,
            caso tenha:
                  - devolve a lista de episódios , cada 1 num card , 
                    com os dados vindos das props , enviados pelo componente
                    Episodios que sao : nome do episódio, imagem do episódio 
                    e o numero do episódio
*/ 


  render() {
    if (this.props.episodio.lenght === 0) {
      return (
        <p>Não existem episodios para esta temporada</p>
      );
    } else {
      return this.props.episodio.map((episodio) => (
        <div className="episodios_wrapper">
          <Link to={{pathname:`/Episodio/${episodio.id}/EpisodiosDetails`,state:{temporadaid:this.props.temporadaid,serieId:this.props.serieId}}}>
            <div className="episodios_content">
              <div className="episodios_content_numero">
                <span> Episódio {episodio.numero} </span>
              </div>
              <div className="episodios_content_img">
                <img key={episodio.id} src={linkApi+"/Imagens/" + episodio.foto} alt="Não existe foto"></img>
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