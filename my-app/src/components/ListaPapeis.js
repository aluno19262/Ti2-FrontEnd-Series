import React, { Component } from 'react';



class ListaPapeis extends Component {

  render() {
    return this.props.papel.map((papel) => (

          <div>
              <p> {papel.nome} </p>
              <img key={papel.id} src={"Imagens/"+papel.logo} alt="P"></img>
              <p>{papel.nome} </p>
          </div>

    ));
  }
}

export default ListaPapeis;