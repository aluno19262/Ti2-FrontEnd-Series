import React, { Component } from 'react';

import '../Style/Editoras.css';



class ListaEditoras extends Component {

  render() {
    return this.props.editora.map((editora) => (
          <div>
              <p > {editora.nome} </p>
              <img  key={editora.id} src={"Imagens/"+editora.logo} alt="P"></img>
              <p >{editora.nome} </p>
          </div>
    ));
  }
}

export default ListaEditoras;