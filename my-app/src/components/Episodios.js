import React, { Component } from 'react';
import ListaEpisodios from './ListaEpisodios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/wrapper.css';
import { linkApi } from './Series';

class Episodios extends Component {

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
    id:null,
    isLoaded: false,
    episodio: null,
    temporadaid:null
  }

/*
  fetch : faz o pedido de get à api e guarda os dados no state com setstate:
              - temporadaid : guarda o id da temporada
              - id : guarda o id da serie
              - isLoaded : permissao para representar os dados (funçao equivalente ao await)
              - episodio : guarda os registos da tabela episodios 
*/ 

  componentDidMount() {
    fetch(linkApi+"/api/values/Temporadas/"+ this.props.match.params.id+"/Episodios" )
      .then(res => res.json())
      .then((data) => {
        this.setState({
          temporadaid:this.props.match.params.id,
          id:this.props.location.state.serie,
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
      
      - this.state.episodio.lenght > 0 (se existem episodios) : apresenta os episódios 
        else : apresenta 1 mensagem para informar que nao há episódios e 1 botão para voltar para as Temporadas
  */
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else if(this.state.episodio.length >0){
      return (
        <React.Fragment>
          <p className="title">Lista de Episódios</p>
          <div className="wp">
            <div className="_wrapper">
              <ListaEpisodios key={"serie" + this.state.episodio.id} episodio={this.state.episodio} temporadaid={this.state.temporadaid} serieId={this.props.location.state.serie}></ListaEpisodios>
            </div>
          </div>
          <Link to={"/Serie/"+ this.state.episodio[0].serieFK+"/Temporadas"}>
            <span className="voltarAtras">Voltar à Lista de Temporadas</span>
        </Link>        
        </React.Fragment>
      );
      
    }else{
      return <React.Fragment>
              <p className="Mensagem_Nao_Existe">Não Existem Episódios</p>
      <Link to={"/Serie/"+ this.props.location.state.serie+"/Temporadas"}>
            <span className="voltarAtras">Voltar à Lista de Temporadas</span>
        </Link>
      </React.Fragment>

    }
  }
}


export default Episodios;