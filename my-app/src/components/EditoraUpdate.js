import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { linkApi } from "./Series.js";
import { Redirect } from 'react-router-dom'
//ficheiro de css das series
import '../Style/EditoraUpdate.css';

class EditoraUpdate extends Component {

    //  state : 
    //      allow : true para apresentar o formulario para editar uma editora
    //              false para fazer redirect para a pagina das editoras (quando é criado com sucesso)
    constructor() {
        super();
        this.state = {
            allow: true
        }
    }
    /*
        fetch Put para editar 1 registo na api
            - Sucesso : apresenta a resposta na consola e torna a variável this.state.allow falsa
            - Erro : apresenta o erro na consola
    */
    handleSubmit = (evt) => {
        evt.preventDefault()
        const url = linkApi + '/api/values/Update/'
        const data = new FormData(evt.target);
        console.log(data)
        console.log(this.props.location.state.id)
        fetch(url + this.props.location.state.id, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
            },
            body: data,
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response);
                this.setState({ allow: false })
            });
    }

    // Se allow = true : Mostra o formulário para editar a editora
    // Se allow = false : faz redirect para a pagina das editoras
    render() {
        if (!this.state.allow) {
            return <Redirect to="/Editoras" ></Redirect>
        } else {
            return (
                <React.Fragment>
                    <div className="editora_Update_titulo">Editar Editora</div>
                    <div className="editora_Update_content_wrapper">
                        <form encType="multipart/form-data" onSubmit={(evt) => { this.handleSubmit(evt) }}>
                            <div className="editora_Update_info">
                                <span>Nome :</span>
                                <input type="text" name="Nome" id="Nome"></input>
                            </div>
                            <div className="editora_Update_info_submit">
                                <input type="submit" ></input>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
            )
        }
    }
}
export default EditoraUpdate;