import React, { Component } from 'react';



class ListaSeries extends Component {

  render() {
    return this.props.serie.map((serie) => (

          <div style={DivStyle}>
            <button>
              <p className="cenas" style={pStyle}> {serie.nome} </p>
              <img style={imgStyle} key={serie.id} src={"Imagens/"+serie.foto} alt="P"></img>
              <p>Classificação</p>
              <p style={pStyle}>{serie.classificacao} </p>
            </button>
          </div>

    ));
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
  boxShadow: "3px 3px 5px grey"
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