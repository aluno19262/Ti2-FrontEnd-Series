import React, { Component } from 'react';



class ListaSeries extends Component {

  render() {
    return this.props.serie.map((serie) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {serie.nome} </p>
              <img style={imgStyle} key={serie.id} src={"Imagens/"+serie.foto} alt="P"></img>
              <p style={pStyle}>{serie.nome} </p>
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