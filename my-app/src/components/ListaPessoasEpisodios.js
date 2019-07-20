import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import '../Style/PessoasEpisodios.css';
import { linkApi } from './Series';

class ListaPessoasEpisodios extends Component {

/* 
      Render : representa por cards a lista de Pessoas , contendo os dados vindos da api , 
                passados pelo componente Pessoas (componente pai), esses dados são :
                o nome da Pessoa e a imagem da Pessoa
                
                
                className="pessoas_container"
*/

  render() {
    if(this.props.episodio.length!=0){
    return this.props.episodio.map((episodio) => (
          <div className="pessoas_wrapper">
           <Link to={{pathname:"/Episodio/"+ episodio.id +"/EpisodiosDetails",state:{serieId:episodio.temporadas.series.id,temporadaid:episodio.temporadas.id}}} className="pessoas_container">
              <div class="pessoas_episodios_links">
                <Link to={"/Serie/"+ episodio.temporadas.series.id +"/Temporadas"}>{"Série : "+episodio.temporadas.series.nome}</Link>
                <Link to={{pathname:"/Temporada/"+ episodio.temporadas.id +"/Episodios",state:{serie:episodio.temporadas.series.id}}}>{"Temporada : "+episodio.temporadas.nome}</Link>
              </div>
              <div className="pessoas_episodios_img">
                <img key={episodio.id} src={linkApi+"/Imagens/"+episodio.foto} alt="Não existe Foto"></img>
              </div>
               <div className="pessoas_nome">
                <p>{episodio.nome}</p>
              </div> 
            </Link>
              
          </div>
    ));
  }else{
    return <p className="Mensagem_Nao_Existe">Não existem Episódios Associados a esta Pessoa</p>
}
  }
}
export default ListaPessoasEpisodios;