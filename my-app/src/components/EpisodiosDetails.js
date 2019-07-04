import React, { Component } from 'react';

import '../Style/EpisodiosDetails.css';



class EpisodiosDetails extends Component {
    constructor(props){
        super(props);
      this.state = {
        isLoaded: false,
        episodioDetalhes: null,
        id:this.props.match.params.id
        };
      }
    
    //   this.props.match.params.id
      componentDidMount() {
        fetch('http://localhost:5000/api/values/EpisodiosDetails/'+this.props.match.params.id)
          .then(res => res.json())
          .then((data) => {
            this.setState({
              isLoaded: true,
              episodioDetalhes: data
            })
            console.log(this.state.episodioDetalhes)
          })
    
          .catch(console.log)
      }

  render() {

if (!this.state.isLoaded) {
    return <div>Loading...</div>
  } else {
      console.log(this.state.episodioDetalhes[0].foto);
      return(

        <div className="episodios_details_wrapper">
            <div className="episodios_details_content_wrapper"> 
                <div className="episodios_details_content_img">
                    <img style={{width:"150px",height:"150px"}} src={"Imagens/"+this.state.episodioDetalhes[0].foto} alt="p"></img>
                </div>
                <div className="episodios_details_content_info_wrapper">
                    <div className="episodios_details_content_info_nome">
                        <p>Episódio {this.state.episodioDetalhes[0].numero} : {this.state.episodioDetalhes[0].nome}</p>
                    </div>
                    <div className="episodios_details_content_info_classificacao">
                        <p>Classificação : {this.state.episodioDetalhes[0].classificacao}</p>
                    </div>
                    <div className="episodios_details_content_info_sinopse">
                        <p>Sinopse : {this.state.episodioDetalhes[0].sinopse}</p>
                    </div>
                </div>
            </div>
            <div className="episodios_details_trailer">
                <iframe src={"https://www.youtube.com/embed/"+this.state.episodioDetalhes[0].trailer} title={this.state.episodioDetalhes[0].id} allowfullscreen></iframe>
            </div>
        </div>
    );
      }
    
  }
}

export default EpisodiosDetails;