import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/Pessoas.css';
import { linkApi } from './Series';

class ListaEpisodiosPessoas extends Component {

/* 
      Render : representa uma lista de pessoas associadas a 1 episódio, 1 por card
               com 1 imagem , o nome da pessoa e o papel desempenhado naquele episódio
               caso não existam pessoas para aquele episódio , apresenta uma mensagem a avisar do mesmo
*/


  render() {
    console.log("depois disto dá erro ", this.props.pessoa)
      if(this.props.pessoa.length!=0){
          return this.props.pessoa.map((pessoa) => (
          <div className="pessoas_wrapper">
            <Link to={{pathname:"/Pessoa/"+pessoa.listaEpisodiosPessoas[0].pessoaFK+"/Episodios",state :{pessoa:this.props.pessoa}}} className="pessoas_container">
            <div className="pessoas_nome">
              <p>{pessoa.listaEpisodiosPessoas[0].papel}</p>
              </div>
              <div className="pessoas_img">
                <img key={pessoa.id} src={linkApi+"/Imagens/"+pessoa.foto} alt="Não existe Foto"></img>
              </div>
              <div className="pessoas_nome">
                <p>{pessoa.nome} </p>
              </div>
            </Link>
              
          </div>
    )); 
      }else{
          return <p className="Mensagem_Nao_Existe">Não existem Pessoas Associadas a este Episódio</p>
      }
     
  }
}
export default ListaEpisodiosPessoas;