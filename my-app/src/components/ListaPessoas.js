import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/Pessoas.css';
import { linkApi } from './Series';

class ListaPessoas extends Component {

/* 
      Render : representa por cards a lista de Pessoas , contendo os dados vindos da api , 
                passados pelo componente Pessoas (componente pai), esses dados são :
                o nome da Pessoa e a imagem da Pessoa, sendo cada card 1 link para os 
                episódios que essa pessoa está presente
*/

  render() {
    return this.props.pessoa.map((pessoa) => (
          <div className="pessoas_wrapper">
            <Link to={{pathname:'/Pessoa/'+pessoa.id+'/Episodios',state:{pessoa:pessoa}}} className="pessoas_container">
              <div className="pessoas_img">
                <img key={pessoa.id} src={linkApi+"/Imagens/"+pessoa.foto} alt="Não existe Foto"></img>
              </div>
              <div className="pessoas_nome">
                <p>{pessoa.nome} </p>
              </div>
            </Link>
              
          </div>
    ));
  }
}
export default ListaPessoas;