import React, { Component } from 'react';



class ListaSeries extends Component {

  render() {
    return this.props.temporada.map((temporada) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {temporada.nome} </p>
              <img style={imgStyle} key={temporada.id} src={"Imagens/"+temporada.foto} alt="P"></img>
              <p style={pStyle}>{temporada.nome} </p>
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
export default ListaSeries;