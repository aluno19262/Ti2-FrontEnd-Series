import React, { Component } from 'react';
import ListaEditoras from './ListaEditoras';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/wrapper.css';
import { linkApi } from './Series';

class Editoras extends Component {

/* 
    Render : Se os dados do fetch já estiverem carregados :
                - apresenta um titilo e chama o componente ListaEditoras para representar 
                  a lista de editoras , passando-lhe os dados vindos da api por props
*/

  render() {

      return (
        <React.Fragment>
          <p className="title">Lista de Editoras</p>
          <div className="editora_create_link">
            <Link to={`/Editora/Create`}>Adicionar uma Editora</Link>
          </div>
          <div className="wp">
            <div className="_wrapper">
              <ListaEditoras ></ListaEditoras>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }



export default Editoras;