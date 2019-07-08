import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {linkApi}from "./Series.js";
import '../Style/temporadas.css';


class ListaTemporadas extends Component {

  /*
      Render : retorna a lista de temporadas , cada 1 num card , 
              com os dados vindos do componente pai (Temporadas), 
              que são : numero da temporada , imagem da temporada 
              e o nome da temporada.
              cada 1 destes cads é 1 link , que quando carregado,
              o cliente e redirecionado para a pagina dos 
              episódios dessa temporada
  */

  render() {
    return (
      this.props.temporada.map((temporada) => (
        <div className="temporada_wrapper">
          <Link to={{ pathname: `/Temporada/${temporada.id}/Episodios`, state: { serie: this.props.serie } }} >
            <div className="temporada_content">
              <div className="temporada_content_numero">
                <span>Temporada {temporada.numero}</span>
              </div>
              <div className="temporada_content_img">
                <img key={temporada.id} src={linkApi+'/Imagens/' + temporada.foto} alt="Não existe Foto"></img>
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