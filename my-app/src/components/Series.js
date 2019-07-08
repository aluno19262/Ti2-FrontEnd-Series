import React, { Component } from 'react';
import ListaSeries from './ListaSeries';

import '../Style/wrapper.css';

export const linkApi = "https://localhost:5001"

class Series extends Component {

/*
 Estados:
  - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
    -false : bloqueia
    -true : autoriza
  - serie : containner para os dados vindos da api ,em que cada registo é 1 serie
*/

  state = {
    isLoaded: false,
    serie: null,
  }

/*
  Fetch dos dados da api e devolve todas os registos da tabela Series
   outputs:
    - sucesso : guarda os dados (isLoaded e serie) no state 
    - erro : faz console log do erro
*/

  componentDidMount() {
    fetch(linkApi + '/api/values/Series')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          serie: data
        })
        console.log(this.state.serie)
      })

      .catch(console.log)
  }
 
/*
  render :
    - isLoaded :
      false : apresenta no ecra "Loading"
      true : apresenta no ecra um titulo e chama o componente ListaSeries 
              que representa cada serie apresentada no ecra, passando-lhe 
              os dados das series pelas props
*/

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div> 
    } else {
      return (
        <React.Fragment>
          <p className="title">Lista de Séries</p>
          <div className="wp">
            <div className="_wrapper">
              <ListaSeries key={"serie" + this.state.serie.id} 
                serie={this.state.serie}>
              </ListaSeries>
            </div>        
          </div>
        </React.Fragment>    
      );
    }
  }
}

export default Series;