import React, { Component } from 'react';
import ListaTemporadas from './ListaTemporadas';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/temporadas.css';
import '../Style/wrapper.css';

class Temporadas extends Component {
  constructor(props){
    super(props);
  this.state = { 
    id:null,
    isLoaded: false,
    temporada: null,
  
    };
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/values/Temporadas/'+this.props.match.params.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          id:this.props.match.params.id,
          isLoaded: true,
          temporada: data
        })
        console.log(this.state.temporada)
      })

      .catch(console.log)
  }
  render() {
    console.log(this.state.id)
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <React.Fragment>
                  <p className="title">Lista de Temporadas</p>
        <div className="wp">
                  <div className="_wrapper">
              
            <ListaTemporadas key={"serie" + this.state.temporada.id} temporada={this.state.temporada} serie={this.state.id}></ListaTemporadas>          
        </div>
        
        </div>
        <Link to="/Series">
          <span className="voltarAtras">Voltar à Lista de Séries</span>
        </Link>
        </React.Fragment>


      );
    }
  }
}

export default Temporadas;