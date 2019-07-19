import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/Pessoas.css';
import { linkApi } from './Series';

class ListaEpisodiosPessoas extends Component {

/* 
      Render : representa por cards a lista de Pessoas , contendo os dados vindos da api , 
                passados pelo componente Pessoas (componente pai), esses dados são :
                o nome da Pessoa e a imagem da Pessoa
*/


  render() {
      if(this.props.pessoa.length!=0){
          return this.props.pessoa.map((pessoa) => (
          <div className="pessoas_wrapper">
            <div to={'/Pessoa/'+pessoa.id+'/Episodios'} className="pessoas_container">
            <div className="pessoas_nome">
                {(()=>{if(pessoa.pessoasEpisodios[0].papel==0){
                    return <p>Ator</p>
                }else{
                    return <p>Realizador</p>
                }
                })()}
              </div>
              <div className="pessoas_img">
                <img key={pessoa.id} src={linkApi+"/Imagens/"+pessoa.foto} alt="Não existe Foto"></img>
              </div>
              <div className="pessoas_nome">
                <p>{pessoa.nome} </p>
              </div>
            </div>
              
          </div>
    )); 
      }else{
          return <p>Não existem Pessoas Associadas a este Episódio</p>
      }
     
  }
}
export default ListaEpisodiosPessoas;