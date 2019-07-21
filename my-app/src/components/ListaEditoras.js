import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { linkApi } from "./Series.js";
import '../Style/Editoras.css';



class ListaEditoras extends Component {
  /*
      state:
        - isLoaded : permite o html nao seja carregado sem que o fetch dos dados esteja completo
              - false : bloqueia
              - true : autoriza
        - editora : containner para os dados vindos da api ,em que cada registo é 1 editora
  */

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

  getEditoras() {
    fetch(linkApi + "/api/values/Editoras")
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

  /*
    fetch Delete para eliminar 1 editora :
        - sucesso : apresenta a resposta na consola e faz o fetch de todas as
          editoras com intuito de recarregar a página sem fazer refresh na mesma
        - erro : mostra uma mensagem na consola com o erro
  */
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
    ).catch(console.log);
  }

  /* 
      Render : representa por cards a lista de editoras , contendo os dados vindos da api , 
                passados pelo componente Editoras (componente pai), esses dados são :
                o nome da editora e a imagem da editora
                cada card tem 1 icon para eliminar e para editar a editora
  */

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return this.state.editora.map((editora) => (
        <div className="editora_wrapper">
          <div className="editora_delete_btn">
            <Link className="editora_content_edit" to={{ pathname: `/Editora/Update`, state: { id: editora.id } }}>✏️</Link>
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