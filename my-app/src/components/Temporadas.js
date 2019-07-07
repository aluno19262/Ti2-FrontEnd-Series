import React, { Component } from 'react';
import ListaTemporadas from './ListaTemporadas';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//ficheiro css das temporadas
import '../Style/temporadas.css';
//ficheiro css dos containners
import '../Style/wrapper.css';


/*
  state: 
    - id : estado que guarda o numero de serie enviado por Link do componente ListaSeries
    - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
        - false : bloqueia
        - true : autoriza
    - temporada : containner para os dados vindos da api ,em que cada registo é 1 temporada
*/ 

class Temporadas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      isLoaded: false,
      temporada: null
    };
  }


  /*
  Fetch dos dados da api e devolve todas os registos da tabela Temporadas
   outputs:
    - sucesso : guarda os dados (isLoaded e temporada) no state 
    - erro : faz console log do erro
*/


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Temporadas/' + this.props.match.params.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          id: this.props.match.params.id,
          isLoaded: true,
          temporada: data
        })
        console.log(this.state.temporada)
      })
      .catch(console.log)
  }

  /*
  render:
      - isLoaded :
          false : apresenta no ecra "Loading"
          true : apresenta um titulo , um botao para voltar ás séries e chama o componente 
                  Lista de Temporadas , que apresenta todas as temporadas (1 card por temporada)
                  no ecra
  */

  render() {
    console.log(this.state.id)
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <p className="title">Lista de Temporadas</p>
          <div className="wp">
            <div className="_wrapper">
              <ListaTemporadas key={"serie" + this.state.temporada.id} temporada={this.state.temporada} serie={this.state.id}></ListaTemporadas>
            </div>
          </div>
          <Link to="/Series">
            <span className="voltarAtras">Voltar à Lista de Séries</span>
          </Link>
        </React.Fragment>
      );
    }
  }
}

export default Temporadas;