import React, { Component } from 'react';

import '../Style/Pessoas.css';

class ListaPessoas extends Component {

  render() {
    return this.props.pessoa.map((pessoa) => (
          <div>
              <p> {pessoa.nome} </p>
              <img key={pessoa.id} src={"Imagens/"+pessoa.foto} alt="P"></img>
              <p>{pessoa.nome} </p>
          </div>
    ));
  }
}
export default ListaPessoas;