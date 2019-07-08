import React, { Component } from 'react';

import '../Style/Pessoas.css';
import { linkApi } from './Series';

class ListaPessoas extends Component {

/* 
      Render : representa por cards a lista de Pessoas , contendo os dados vindos da api , 
                passados pelo componente Pessoas (componente pai), esses dados são :
                o nome da Pessoa e a imagem da Pessoa
*/

  render() {
    return this.props.pessoa.map((pessoa) => (
          <div className="pessoas_wrapper">
            <div className="pessoas_container">
              <div className="pessoas_img">
                <img key={pessoa.id} src={linkApi+"/Imagens/"+pessoa.foto} alt="Não existe Foto"></img>
              </div>
              <div className="pessoas_nome">
                <p>{pessoa.nome} </p>
              </div>
            </div>
              
          </div>
    ));
  }
}
export default ListaPessoas;