import React, { Component } from 'react';

import '../Style/Editoras.css';



class ListaEditoras extends Component {

  render() {
    return this.props.editora.map((editora) => (
      <div className="editora_wrapper">
        <div className="editora_content">
          <div class="editora_img">
            <img key={editora.id} src={"Imagens/" + editora.logo} alt=""></img>
          </div>
          <div className="editora_nome">
            <p >{editora.nome.toUpperCase()} </p>
          </div>
        </div>
      </div>
    ));
  }
}

export default ListaEditoras;