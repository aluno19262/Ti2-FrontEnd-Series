import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Comentarios from './Comentarios';

import '../Style/EpisodiosDetails.css';




class EpisodiosDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      episodioDetalhes: null,
      id: this.props.match.params.id,
      comentario: null,
      tempId: null,
      com: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/values/EpisodiosDetails/' + this.state.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          tempId: this.props.location.state.temporadaid,
          isLoaded: true,
          episodioDetalhes: data
        })
        console.log(this.state.episodioDetalhes)
      })

      .catch(console.log)
  }

  handleClick = event => {
    console.log(this.state.comentario.texto)
    const url = "http://localhost:5000/api/values/api/CreateComment/"
    const data = { texto: this.state.comentario }
    fetch(url + this.state.id, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }




  render() {

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <div className="episodios_details_wrapper">
            <div className="episodios_details_content_wrapper">
              <div className="episodios_details_content_img">
                <img src={"../Imagens/" + this.state.episodioDetalhes[0].foto} alt=""></img>
              </div>
              <div className="episodios_details_content_info_wrapper">
                <div className="episodios_details_content_info_nome">
                  <p>Episódio {this.state.episodioDetalhes[0].numero} : {this.state.episodioDetalhes[0].nome}</p>
                </div>
                <div className="episodios_details_content_info_classificacao">
                  <p>Classificação : {this.state.episodioDetalhes[0].classificacao}</p>
                </div>
                <div className="episodios_details_content_info_sinopse">
                  <p>Sinopse : {this.state.episodioDetalhes[0].sinopse}</p>
                </div>
              </div>
            </div>
            <div className="episodios_details_trailer">
              <p>Trailer</p>
              <iframe src={"https://www.youtube.com/embed/" + this.state.episodioDetalhes[0].trailer} title={this.state.episodioDetalhes[0].id}></iframe>
            </div>
            <div className="episodios_details_comentarios_wrapper">
              <div className="episodios_details_comentarios_show">
                <Comentarios x={this.state.id} com={this.state.com}></Comentarios>
              </div>
              <div className="episodios_details_comentarios_inserir_wrapper">
                <div className="episodios_details_comentarios_inserir">
                  <input id="ins" type="text" placeholder="Insira o seu comentário" name="name" onChange={e => this.setState({ comentario: e.target.value })} value={this.state.comentario} />
                </div>
                <div className="episodios_details_comentarios_inserir_btn">
                    <span onClick={this.handleClick}>➕</span>                  
                </div>
              </div>
            </div>
          </div>
          <Link to={"/Episodios/" + this.state.tempId}>
            <span className="voltarAtras">Voltar à Lista de Episódios</span>
          </Link>
        </React.Fragment>
      );
    }

  }
}

export default EpisodiosDetails;