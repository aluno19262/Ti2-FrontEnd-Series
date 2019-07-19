import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/Pessoas.css';
import { linkApi } from './Series';

class ListaPessoasEpisodios extends Component {

/* 
      Render : representa por cards a lista de Pessoas , contendo os dados vindos da api , 
                passados pelo componente Pessoas (componente pai), esses dados são :
                o nome da Pessoa e a imagem da Pessoa
*/

  render() {
    return this.props.episodio.map((episodio) => (
          <div className="pessoas_wrapper">
            <div to={'/Pessoa/'+episodio.id+'/Episodios'} className="pessoas_container">
              <div className="pessoas_img">
                <img key={episodio.id} src={linkApi+"/Imagens/"+episodio.foto} alt="Não existe Foto"></img>
              </div>
              <div className="pessoas_nome">
                <p>{episodio.nome} </p>
              </div>
            </div>
              
          </div>
    ));
  }
}
export default ListaPessoasEpisodios;