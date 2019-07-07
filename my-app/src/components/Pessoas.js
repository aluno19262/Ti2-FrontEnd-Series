import React, { Component } from 'react';
import ListaPessoas from './ListaPessoas';

import '../Style/wrapper.css';

class Pessoas extends Component {

/*
    state:
      - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
            - false : bloqueia
            - true : autoriza
      - editora : containner para os dados vindos da api ,em que cada registo é 1 editora
*/

  state = {
    isLoaded: false,
    pessoa: null,
  }

/* 
    fetch : faz o pedido get à api e guarda os dados das editoras no state com setState:
                - isLoaded : premissao para disponibilizar o html 
                - pessoa : guarda os dados relativos ás Pessoas (todos os registos da bd das Pessoas)
*/
  componentDidMount() {
    fetch('https://localhost:5001/api/values/Pessoas')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          pessoa: data
        })
        console.log(this.state.pessoa)
      })

      .catch(console.log)
  }

  /* 
    Render : Se os dados do fetch já estiverem carregados :
                - apresenta um titilo e chama o componente ListaPessoas para representar 
                  a lista de Pessoas , passando-lhe os dados vindos da api por props
*/

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <p className="title">Lista de Pessoas</p>
          <div className="wp">
            <div className="_wrapper">
              <div className="size">
                <ListaPessoas key={"serie" + this.state.pessoa.id} pessoa={this.state.pessoa} ></ListaPessoas>
              </div>
            </div>
          </div>
        </React.Fragment>


      );
    }
  }
}


export default Pessoas;