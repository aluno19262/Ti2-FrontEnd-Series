import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import {linkApi}from "./Series.js";


import '../Style/Series.css';

class ListaSeries extends Component {
  render() {
    console.log(this.props.serie)
    return (       
        this.props.serie.map((serie) => ( 
          <div className="series_content_wrapper">
            <Link to={`/Temporadas/${serie.id}`}>
              <div className="series_content_container">
                 <span className="series_content_titulo" > {serie.nome} </span>
              <img className="series_content_img" key={serie.id} src={linkApi+"/Imagens/"+serie.foto} alt=""></img>
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
  }
}
export default ListaSeries;