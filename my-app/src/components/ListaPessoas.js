import React, { Component } from 'react';



class ListaPessoas extends Component {

  render() {
    return this.props.pessoa.map((pessoa) => (

          <div style={DivStyle}>
            <button>
              <p style={pStyle}> {pessoa.nome} </p>
              <img style={imgStyle} key={pessoa.id} src={"Imagens/"+pessoa.foto} alt="P"></img>
              <p style={pStyle}>{pessoa.nome} </p>
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
export default ListaPessoas;