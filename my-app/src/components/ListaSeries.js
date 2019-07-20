import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import {linkApi}from "./Series.js";

//ficheiro de css das series
import '../Style/Series.css';

class ListaSeries extends Component {

/*
  render: 
          Disponibiliza cada serie num card no ecra com os dados 
          vindos da api (nome, imagem , classificação e genero).
          
          Cada uma das series é um link que redireciona para a página
          das temporadas da respetiva serie
*/

  render() {
    if(this.props.serie.length!=0){
      return (       
        this.props.serie.map((serie) => ( 
          <div className="series_content_wrapper">
            <Link to={`/Serie/${serie.id}/Temporadas`}>
              <div className="series_content_container">
                 <span className="series_content_titulo" > {serie.nome} </span>
              <img className="series_content_img" key={serie.id} src={linkApi+"/Imagens/"+serie.foto} alt="Não existe Foto"></img>
              <div className="series_content_info">
                <span>Classificação : {serie.classificacao}</span>
                <span>Género : {serie.genero}</span>    
              </div>
              </div>
              </Link>  
          </div>                           
        )      
      )
    )
    }else{
      return <p className="Mensagem_Nao_Existe">Não Existem Séries Disponíveis</p>
    }
    
  }
}
export default ListaSeries;