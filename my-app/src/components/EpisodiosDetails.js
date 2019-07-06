import React, { Component } from 'react';

import Comentarios from './Comentarios';

import '../Style/EpisodiosDetails.css';



class EpisodiosDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      episodioDetalhes: null,
      id: this.props.match.params.id,
      comentario:null
    };
  }

  //   this.props.match.params.id
  componentDidMount() {
    fetch('http://localhost:5000/api/values/EpisodiosDetails/' + this.props.match.params.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          episodioDetalhes: data
        })
        console.log(this.state.episodioDetalhes)
      })

      .catch(console.log)
  }

 

  handleClick = event =>{
    console.log(this.state.comentario);
    console.log(this.state.apiComment);
  }

  render() {

    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
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
            <iframe src={"https://www.youtube.com/embed/" + this.state.episodioDetalhes[0].trailer} title={this.state.episodioDetalhes[0].id} allowfullscreen></iframe>
          </div>
          <div className="episodios_details_comentarios_wrapper">
            <div className="episodios_details_comentarios_show">
              <Comentarios x={this.state.id}></Comentarios>
            </div>
            <div className="episodios_details_comentarios_inserir_wrapper">
              <div className="episodios_details_comentarios_inserir"> 
                  <input id="ins" type="text" placeholder="Insira o seu comentário" name="name" onChange={e => this.setState({ comentario : e.target.value })}value={this.state.comentario}/>        
              </div>
              <div className="episodios_details_comentarios_inserir_btn">
                <span onClick={this.handleClick}>➕</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

export default EpisodiosDetails;