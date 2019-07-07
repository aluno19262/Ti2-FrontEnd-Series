import React, { Component } from 'react';
import ListaEpisodios from './ListaEpisodios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/wrapper.css';

class Episodios extends Component {
  state = {
    id:null,
    isLoaded: false,
    episodio: null,
    temporadaid:null
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Episodios/' + this.props.match.params.id)
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
  render() {
    console.log(this.props.location.state)
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
          <p className="title">Lista de Episódios</p>
          <div className="wp">
            <div className="_wrapper">
              <ListaEpisodios key={"serie" + this.state.episodio.id} episodio={this.state.episodio} temporadaid={this.state.temporadaid}></ListaEpisodios>
            </div>
          </div>
          <Link to={"/Temporadas/"+this.state.id}>
            <span className="voltarAtras">Voltar à Lista de Temporadas</span>
        </Link>
        </React.Fragment>
      );
      
    }
  }
}


export default Episodios;