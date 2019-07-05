import React, { Component } from 'react';

import '../Style/Pessoas.css';

class ListaPessoas extends Component {

  render() {
    return this.props.pessoa.map((pessoa) => (
          <div className="pessoas_wrapper">
            <div className="pessoas_container">
              <div className="pessoas_img">
                <img key={pessoa.id} src={"Imagens/"+pessoa.foto} alt="P"></img>
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