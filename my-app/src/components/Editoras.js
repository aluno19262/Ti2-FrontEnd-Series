import React, { Component } from 'react';
import ListaEditoras from './ListaEditoras';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/wrapper.css';
import { linkApi } from './Series';

class Editoras extends Component {

/*
    state:
      - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
            - false : bloqueia
            - true : autoriza
      - editora : containner para os dados vindos da api ,em que cada registo é 1 editora
*/

  state = {
    isLoaded: false,
    editora: null,
  }


/* 
    fetch : faz o pedido get à api e guarda os dados das editoras no state com setState:
                - isLoaded : premissao para disponibilizar o html 
                - editora : guarda os dados relativos as editoras (todos os registos da bd das editoras)
*/

  componentDidMount() {
    fetch(linkApi+"/api/values/Editoras")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          editora: data
        })
        console.log(this.state.editora)
      })

      .catch(console.log)
  }


/* 
    Render : Se os dados do fetch já estiverem carregados :
                - apresenta um titilo e chama o componente ListaEditoras para representar 
                  a lista de editoras , passando-lhe os dados vindos da api por props
*/

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <p className="title">Lista de Editoras</p>
          <div className="editora_create_link">
            <Link to={`/Editora/Create`}>Adicionar uma Editora</Link>
          </div>
          <div className="wp">
            <div className="_wrapper">
              <ListaEditoras key={"serie" + this.state.editora.id} editora={this.state.editora} ></ListaEditoras>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}


export default Editoras;