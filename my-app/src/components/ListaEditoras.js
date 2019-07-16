import React, { Component } from 'react';
import { linkApi } from "./Series.js";
import '../Style/Editoras.css';



class ListaEditoras extends Component {

  state = {
    isLoaded: false,
    editora: null,
  }

  /* 
    fetch : faz o pedido get à api e guarda os dados das editoras no state com setState:
                - isLoaded : premissao para disponibilizar o html 
                - editora : guarda os dados relativos as editoras (todos os registos da bd das editoras)
*/

componentDidMount() {
  this.getEditoras()
}

getEditoras(){
  fetch(linkApi+"/api/values/Editoras")
    .then(res => res.json())
    .then((data) => {
      this.setState({
        isLoaded: true,
        editora: data
      })
      console.log(this.state.editora)
    })

    .catch(console.log)
}

  handleClick = (id) => {
    fetch(linkApi + "/api/values/Delete/" + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(response => {
      if (response.status === 204) {
        console.log(response)
        this.getEditoras();
      }
    }
    );
  }

  /* 
      Render : representa por cards a lista de editoras , contendo os dados vindos da api , 
                passados pelo componente Editoras (componente pai), esses dados são :
                o nome da editora e a imagem da editora
  */

  render() {
    if(!this.state.isLoaded){
      return <div>Loading...</div>
    }else{
      return this.state.editora.map((editora) => (
      <div className="editora_wrapper">
        <div className="editora_delete_btn">
          <span className="editora_content_edit">✏️</span>
          <span className="editora_content_delete" onClick={() => { this.handleClick(editora.id) }}>❌</span>   
        </div>
        <div className="editora_content">
          <div className="editora_img">
            <img key={editora.id} src={linkApi + "/Imagens/" + editora.logo} alt="Não existe Foto"></img>
          </div>
          <div className="editora_nome">
            <p >{editora.nome.toUpperCase()} </p>
          </div>
        </div>
      </div>
    ));
  }
    }
    
}

export default ListaEditoras;