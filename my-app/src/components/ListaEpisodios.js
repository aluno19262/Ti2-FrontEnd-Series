import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

import '../Style/Episodios.css';


class ListaEpisodios extends Component {

  render() {
    console.log(this.props.episodio.lenght);
    if(this.props.episodio.lenght===0){
      return(
        <p>Não existem episodios para esta temporada</p>
      );
    }else{
      return this.props.episodio.map((episodio) => (
<Link to={`/EpisodiosDetails/${episodio.id}`}>
          <div>          
              <p> Episódio {episodio.numero} </p>
              <img key={episodio.id} src={"../Imagens/"+episodio.foto} alt="../Imagens/ALT.png"></img>
              <p>{episodio.nome} </p>
          </div>
</Link>
          

    ));
    }
    
  }
}
export default ListaEpisodios;