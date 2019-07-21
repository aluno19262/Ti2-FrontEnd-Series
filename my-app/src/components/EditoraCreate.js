import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { linkApi } from "./Series.js";
import { Redirect } from 'react-router-dom'
//ficheiro de css das series
import '../Style/EditoraCreate.css';

class EditoraCreate extends Component {

    //  state : 
    //      allow : true para apresentar o formulario para criar uma editora
    //              false para fazer redirect para a pagina das editoras (quando é criado com sucesso)
    constructor() {
        super();
        this.state = {
            allow: true
        }
    }

    /* 
        fetch para criar uma editora dando-lhe os dados do formulário
            - Se tudo correr com sucesso, é dada uma mensagem na consola com a resposta da api
              e a variavel this.state.allow é tornada false para poder voltar á página das editoras
            - Se algo não correr como previsto, é enviada 1 mensagem para a consola com o erro
    */
    handleSubmit = (evt) => {
        evt.preventDefault()
        const url = linkApi + '/api/values/Editoras/Create'
        const data = new FormData(evt.target);
        console.log(data)
        fetch(url, {
            mode: 'no-cors',
            method: "POST",
            headers: {
                "Accept": "application/json",
                "type": "formData"
            },
            body: data

        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                this.setState({ allow: false })
            });
    }

    // Se allow = true : Mostra o formulário para criar a editora
    // Se allow = false : faz redirect para a pagina das editoras
    render() {
        if (!this.state.allow) {
            return <Redirect to="/Editoras" ></Redirect>
        } else {
            return (
                <React.Fragment>
                    <div className="editora_create_titulo">Criar Editora</div>
                    <div className="editora_create_content_wrapper">
                        <form encType="multipart/form-data" onSubmit={(evt) => { this.handleSubmit(evt) }}>
                            <div className="editora_create_info">
                                <span>Nome :</span>
                                <input type="text" name="Nome" id="Nome"></input>
                            </div>
                            <div className="editora_create_info">
                                <span>Imagem :</span>
                                <input type="file" name="Logo" id="Logo"></input>
                            </div>
                            <div className="editora_create_info_submit">
                                <input type="submit" ></input>
                            </div>
                        </form>
                    </div>
                </React.Fragment>

            )
        }
    }
}
export default EditoraCreate;