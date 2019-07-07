import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Comentarios extends Component {
  
  /*
      State:
            - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
                  - false : bloqueia
                  - true : autoriza
            - apiComment : guarda os comentario vindos do fetch
  */


  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      apiComment: null,
    };
  }

  /*
    fetch para carregar os comentários para o frontend depois de ter sido eliminado 1 comentário
  */

  componentDidUpdate(prevProps){
    if(prevProps.newComment != this.props.newComment){
      fetch('http://localhost:5000/api/values/Comentarios/' + this.props.x)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          apiComment: data
        })
        this.forceUpdate()
        console.log(this.state.apiComment)
        console.log(this.state.apiComment.length)
      })
      .catch(console.log)
    }
  }

  /*
      fetch : faz o pedido de get à api e guarda os dados nos states apropriados 
                - isLoaded : informar que os dados estao carregados
                - apiComments : comentarios de 1 episódio

              outputs : 
                - caso de erro : disponibiliza na consola o erro 
                - caso sucesso : guarda os dados 
  */

  componentDidMount() {
    fetch('http://localhost:5000/api/values/Comentarios/' + this.props.x)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          apiComment: data
        })
        console.log(this.state.apiComment)
        console.log(this.state.apiComment.length)
      })
      .catch(console.log)
  }

  /*
    fetch para delete de 1 comentário e fetch para voltar a carregar os comentários
  */

  handleClick = apiComment => {
    console.log(apiComment)
    fetch("http://localhost:5000/api/values/DeleteComentario/" + apiComment, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(response => {
      if (response.status === 204) {
        console.log(response)
        fetch('http://localhost:5000/api/values/Comentarios/' + this.props.x)
          .then(res => res.json())
          .then((data) => {
            this.setState({
              isLoaded: true,
              apiComment: data
            })
            console.log(this.state.apiComment)
          })
          .catch(console.log)
      }
    }
    );
  }


  /*
    Render : apresenta uma box que tem um espaço para inserir o comentário e 1 botão para publicar o comentário 
              e uma box onde apresenta todos os comentarios daquele episódio com 1 botao para eliminar o
              episódio
  */

  render() {
    console.log(this.props.x);
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else if (this.state.apiComment.length > 0) {
      return this.state.apiComment.map((apiComment) => (
        <div className="comentario" key={apiComment.id}>
          <p>{apiComment.texto}</p>
          <span onClick={() => { this.handleClick(apiComment.id) }}>❌</span>
        </div>
      ));
    } else {
      return (<h2 className="nocontent"> Não existem comentários</h2>);
    }

  }
}
export default Comentarios;