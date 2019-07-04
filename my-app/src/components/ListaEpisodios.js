import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";


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
          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {episodio.nome} </p>
              <img style={imgStyle} key={episodio.id} src={"Imagens/"+episodio.foto} alt="P"></img>
              <p style={pStyle}>{episodio.nome} </p>
            </button>
          </div>
</Link>
          

    ));
    }
    
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
export default ListaEpisodios;