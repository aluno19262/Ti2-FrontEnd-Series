import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";


class ListaTemporadas extends Component {

  render() {
console.log(this.props.temporada)
    return this.props.temporada.map((temporada) => (
      
<Link to={`/Episodios/${temporada.id}`}>
          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {temporada.nome} </p>
              <img style={imgStyle} key={temporada.id} src={'Imagens/'+temporada.foto} alt="P"></img>
              <p style={pStyle}>{temporada.nome} </p>
            </button>
          </div>
</Link>
    ));
  }
}


const DivStyle = {
  display: "flex",
  background: '#909090',
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  margin:"20px"
}

const imgStyle = {
  width: "150px",
  height: "150px",
  margin: "10px"
}

const pStyle = {
  textAlign: "center"
}
export default ListaTemporadas;