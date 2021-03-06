import React, { Component } from 'react';
import ListaEpisodiosPessoas from './ListaEpisodiosPessoas';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/wrapper.css';
import { linkApi } from './Series';

class EpisodiosPessoas extends Component {

    /*
     state:
          - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
                - false : bloqueia
                - true : autoriza
          - pessoa : containner para os dados vindos da api ,em que cada registo é 1 pessoa
          
    */

    state = {
        isLoaded: false,
        pessoa: null,
        episodio: null
    }

    /*
      fetch : faz o pedido de get à api e guarda os dados no state com setstate:
                  - isLoaded : permissao para representar os dados (funçao equivalente ao await)
                  - pessoa : guarda os registos da tabela pessoas 
                  - episodio : guarda o id do episódio
    */

    componentDidMount() {
        fetch(linkApi + "/api/values/PapelEpisodio/" + this.props.match.params.id)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    episodio: this.props.location.state.episodio,
                    isLoaded: true,
                    pessoa: data
                })
                console.log(this.state.pessoa)
            })
            .catch(console.log)
    }

    /*
  render:
      - isLoaded :
          false : apresenta no ecra "Loading"
          true : apresenta 1 titulo , chama o componente ListaEpisodiosPessoas para mostrar todas as pessoas 
                 associadas a 1 episodio especifico e 1 botão para voltar aos detalhes do Episódio
  */
    render() {

        if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <React.Fragment>{console.log(this.state.pessoa)}
                    <p className="title">{"Lista de Episódios Associados a " + this.props.location.state.episodio.nome}</p>
                    <div className="wp">
                        <div className="_wrapper">
                            <ListaEpisodiosPessoas key={"serie" + this.state.pessoa.id} pessoa={this.state.pessoa} ></ListaEpisodiosPessoas>
                        </div>
                    </div>
                    <Link to={{ pathname: "/Episodio/" + this.props.match.params.id + "/EpisodiosDetails", state: { temporadaId: this.state.episodio.temporadaFK } }}>
                        <span className="voltarAtras">Voltar aos Detalhes do Episódio</span>
                    </Link>
                </React.Fragment>
            );
        }
    }
}

export default EpisodiosPessoas;