import React, { Component } from 'react';



class ListaEpisodios extends Component {

  render() {
    console.log(this.props.episodio.lenght);
    if(this.props.episodio.lenght===0){
      return(
        <p>Não existem episodios para esta temporada</p>
      );
    }else{
      return this.props.episodio.map((episodio) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {episodio.nome} </p>
              <img style={imgStyle} key={episodio.id} src={"Imagens/"+episodio.foto} alt="P"></img>
              <p style={pStyle}>{episodio.nome} </p>
            </button>
          </div>

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