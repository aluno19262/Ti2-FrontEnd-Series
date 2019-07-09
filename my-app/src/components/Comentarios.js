import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../Style/Comentarios.css';
import { linkApi } from './Series';



class Comentarios extends Component {

  /*
      State:
            - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
                  - false : bloqueia
                  - true : autoriza
            - apiComment : guarda os comentario vindos do fetch
            - comentario : comentário introduzido pelo utilizador
  */

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      apiComment: null,
      comentario: null
    };
  }

  componentDidMount() {
    this.getComment();
  }

  /*
    fetch para delete de 1 comentário e fetch para voltar a carregar os comentários
  */

  handleClick = apiComment => {
    fetch(linkApi+"/api/values/Comentarios/Delete/" + apiComment, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(response => {
      if (response.status === 204) {
        console.log(response)
        this.getComment()
      }
    }
    );
  }

  /**
      fetch : faz o pedido de get à api e guarda os dados nos states apropriados 
                - isLoaded : informar que os dados estao carregados
                - apiComments : comentarios de 1 episódio

              outputs : 
                - caso de erro : disponibiliza na consola o erro 
                - caso sucesso : guarda os dados 
  */

  getComment() {
    fetch(linkApi+"/api/values/Comentarios/Get/" + this.props.x)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          apiComment: data
        });
        console.log(this.state.apiComment);
      })
      .catch(console.log);
  }

  /*
    função handleClick que e corrida quando o botao de criar 1 comentário é pressionado
    faz o post para a api 
        - se ocorrer algo erro : devolve na consola "error" e o erro
        - se tudo correr com sucesso : devolve na consola "success: " e a resposta
  */

  handleClickInsert = () => {

    const url = linkApi+"/api/values/Comentarios/Create/"
    const data = { texto: this.state.comentario }
    fetch(url + this.props.x, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response);
        this.getComment()
      });
  }

  /*
    Render : apresenta uma box que tem um espaço para inserir o comentário e 1 botão para publicar o comentário 
              e uma box onde apresenta todos os comentarios daquele episódio com 1 botao para eliminar o
              episódio
              lista de comentários com 1 espaço para inserir comentário
               e 1 botao para publicar
  */

  render() {
    var comentarios = [];
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else if (this.state.apiComment.length > 0) {
      comentarios = this.state.apiComment.map((apiComment) => (
        <div className="comentario" key={apiComment.id}>
          <p>{apiComment.texto}</p>
          <span onClick={() => { this.handleClick(apiComment.id) }}>❌</span>
        </div>
      ));
    } else {
      return (
        <React.Fragment>
          <h2 className="nocontent"> Não existem comentários</h2>
      <div className="episodios_details_comentarios_inserir_wrapper">
        <div className="episodios_details_comentarios_inserir">
          <input id="ins" type="text" placeholder="Insira o seu comentário" name="name" onChange={e => this.setState({ comentario: e.target.value })} value={this.state.comentario} />
        </div>
        <div className="episodios_details_comentarios_inserir_btn">
          <span onClick={this.handleClickInsert}>➕</span>
        </div>
      </div>
        </React.Fragment>
      
      );
    }
    return <React.Fragment>
      <div className="episodios_details_comentarios_show">
        {comentarios}
      </div>
      <div className="episodios_details_comentarios_inserir_wrapper">
        <div className="episodios_details_comentarios_inserir">
          <input id="ins" type="text" placeholder="Insira o seu comentário" name="name" onChange={e => this.setState({ comentario: e.target.value })} value={this.state.comentario} />
        </div>
        <div className="episodios_details_comentarios_inserir_btn">
          <span onClick={this.handleClickInsert}>➕</span>
        </div>
      </div>
    </React.Fragment>
  }
}
export default Comentarios;