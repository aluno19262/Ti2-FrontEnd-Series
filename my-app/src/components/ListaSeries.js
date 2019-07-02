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


const DivStyle = {
  display: "flex",
  background: '#909090',
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  margin:"20px",
  justifyContent:"center",
  boxShadow: "3px 3px 5px grey",
  textDecoration:"none"
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