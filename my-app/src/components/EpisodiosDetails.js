import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comentarios from './Comentarios';
import '../Style/EpisodiosDetails.css';
import { linkApi } from './Series';

class EpisodiosDetails extends Component {

  /*
      State : 
          - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
                - false : bloqueia
                - true : autoriza
          - episodiosDetalhes : guarda os dados vindos da api referentes aos detalhes dos episodios
          - id : guarda o id do episódio 
          - comentario : guarda o texto do comentário
          - tempId : guarda o id da temporada
          - com e newComent sao variáveis auxiliares
  */

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      episodioDetalhes: null,
      id: this.props.match.params.id,
      comentario: null,
      tempId: null,
      com: true,
      newComent:false
    };
  }

  /*
      fetch : envia o pedido de get para a api e guarda os dados vindos da api nos states apropriados:
                - tempId : guarda o id da temporada passado pelo location state do link 
                - isLoaded : para informar que os dados foram carregados 
                - episodiosDetalhes : para guardar todos os dados referentes ao episodio
              outputs:
                - se for concluido com sucesso : mostra na consola os registos da bd dos episodios 
                - se der erro : mostra o erro na consola
  */

  componentDidMount() {
    fetch(linkApi+"/api/values/Episodio/"+ this.state.id +"/EpisodiosDetails" )
      .then(res => res.json())
      .then((data) => {
        this.setState({
          tempId: this.props.location.state.temporadaid,
          isLoaded: true,
          episodioDetalhes: data,
          comentario:null
        })
        console.log(this.state.episodioDetalhes)
      })

      .catch(console.log)
  }

  /*
      Render : se os dados do fetch ja estiverem carregados , apresenta a imagem do episodio,
      algumas informações acerca do episódio ( classificação, nome do episódio, numero do episódio e a sinopse),
      de seguinda o trailler do episódio e uma lista de comentários com 1 espaço para inserir comentário
      e 1 botao para publicar (chamada do componente Comentarios)
      botao para voltar aos episódios
  */

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <div className="episodios_details_wrapper">
            <div className="episodios_details_content_wrapper">
              <div className="episodios_details_content_img">
                <img src={linkApi+"/Imagens/" + this.state.episodioDetalhes.foto} alt="Não Existe Foto"></img>
              </div>
              <div className="episodios_details_content_info_wrapper">
                <div className="episodios_details_content_info_nome">
                  <p>Episódio {this.state.episodioDetalhes.numero} : {this.state.episodioDetalhes.nome}</p>
                </div>
                <div className="episodios_details_content_info_classificacao">
                  <p>Classificação : {this.state.episodioDetalhes.classificacao}</p>
                </div>
                <div className="episodios_details_content_info_sinopse">
                  <p>Sinopse : {this.state.episodioDetalhes.sinopse}</p>
                </div>
              </div>
            </div>
            <div className="episodios_details_trailer">
              <p>Trailer</p>
              <iframe src={"https://www.youtube.com/embed/" + this.state.episodioDetalhes.trailer} title={this.state.episodioDetalhes.id}></iframe>
            </div>
            <div className="episodios_details_comentarios_wrapper">
                <Comentarios x={this.state.id}></Comentarios>             
            </div>
          </div>
          <Link to={{pathname:"/Temporada/" + this.state.episodioDetalhes.temporadaFK+"/Episodios",state:{serieId : this.props.location.state.serieId}}}>
            <span className="voltarAtras">Voltar à Lista de Episódios</span>
          </Link>
        </React.Fragment>
      );
    }
  }
}

export default EpisodiosDetails;