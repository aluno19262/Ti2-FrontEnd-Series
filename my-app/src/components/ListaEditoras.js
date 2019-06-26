import React, { Component } from 'react';



class ListaEditoras extends Component {

  render() {
    return this.props.editora.map((editora) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {editora.nome} </p>
              <img style={imgStyle} key={editora.id} src={"Imagens/"+editora.logo} alt="P"></img>
              <p style={pStyle}>{editora.nome} </p>
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
export default ListaEditoras;