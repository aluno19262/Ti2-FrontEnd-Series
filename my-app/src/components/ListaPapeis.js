import React, { Component } from 'react';



class ListaPapeis extends Component {

  render() {
    return this.props.papel.map((papel) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {papel.nome} </p>
              <img style={imgStyle} key={papel.id} src={"Imagens/"+papel.logo} alt="P"></img>
              <p style={pStyle}>{papel.nome} </p>
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
export default ListaPapeis;