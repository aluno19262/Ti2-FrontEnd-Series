import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Comentarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,

      apiComment: null,
      delcom: false
    };
  }

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
      return (<h2> Não existem comentários</h2>);
    }

  }
}
export default Comentarios;