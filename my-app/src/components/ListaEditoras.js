import React, { Component } from 'react';
import {linkApi}from "./Series.js";
import '../Style/Editoras.css';



class ListaEditoras extends Component {

  /* 
      Render : representa por cards a lista de editoras , contendo os dados vindos da api , 
                passados pelo componente Editoras (componente pai), esses dados são :
                o nome da editora e a imagem da editora
  */

  render() {
    return this.props.editora.map((editora) => (
      <div className="editora_wrapper">
        <div className="editora_content">
          <div class="editora_img">
            <img key={editora.id} src={linkApi+"/Imagens/" + editora.logo} alt="Não existe Foto"></img>
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