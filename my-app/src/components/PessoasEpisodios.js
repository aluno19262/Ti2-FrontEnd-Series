import React, { Component } from 'react';
import ListaPessoasEpisodios from './ListaPessoasEpisodios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/wrapper.css';
import { linkApi } from './Series';

class PessoasEpisodios extends Component {

    /*
     state:
          - id : guarda o id da série dos episódios
          - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
                - false : bloqueia
                - true : autoriza
          - episodio : containner para os dados vindos da api ,em que cada registo é 1 episódio
          - temporadaid : guarda o id da temporada dos Episodios
    */

    state = {
        isLoaded: false,
        episodio: null
    }

    /*
      fetch : faz o pedido de get à api e guarda os dados no state com setstate:
                  - temporadaid : guarda o id da temporada
                  - id : guarda o id da serie
                  - isLoaded : permissao para representar os dados (funçao equivalente ao await)
                  - episodio : guarda os registos da tabela episodios 
    */

    componentDidMount() {
        fetch(linkApi + "/api/values/PapelPessoa/" + this.props.match.params.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    episodio: data
                })
                console.log(this.state.episodio)
            })
            .catch(console.log)
    }

    /*
  render:
      - isLoaded :
          false : apresenta no ecra "Loading"
          true : apresenta um titulo , um botao para voltar ás temporadas e chama o componente 
                  ListaEpisodios , que apresenta todos os episódios (1 card por temporada) no ecra
                  passando os dados dos episódios e o id da temporada por props
  */
    render() {
        
        if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>
                    <p className="title">{"Lista de Episódios Associados a "+this.props.location.state.pessoa.nome}</p> 
                    <div className="wp">
                        <div className="_wrapper">
                            <ListaPessoasEpisodios key={"serie" + this.state.episodio.id} episodio={this.state.episodio} ></ListaPessoasEpisodios>
                        </div>
                    </div>
                    <Link to={"/Pessoas"}>
                        <span className="voltarAtras">Ver Lista de Pessoas</span>
                    </Link>
                </React.Fragment>

            );
        }
    }
}



export default PessoasEpisodios;