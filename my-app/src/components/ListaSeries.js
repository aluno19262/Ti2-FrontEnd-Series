import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import Temporadas from './Temporadas';

class ListaSeries extends Component {
  render() {
    return (       
        this.props.serie.map((serie) => (             
            <Link style={{textDecoration: "none",color:"black",flex:1}} to={`/Temporadas/${serie.id}`}
              onClick={this.handleClick}>
              <p className="cenas" style={pStyle}> {serie.nome} </p>
              <img style={imgStyle} key={serie.id} src={"Imagens/"+serie.foto} alt="P"></img>
              <p>Classificação</p>
              <p style={pStyle}>{serie.Classificacao} </p>
              <p>Género</p>
              <p style={pStyle}>{serie.Genero} </p>
            </Link>     
        )      
      )
    )
  }
}

const imgStyle = {
  width: "250px",
  height: "250px",
  margin: "10px",
  
}

const pStyle = {
  textAlign: "center"
}
export default ListaSeries;