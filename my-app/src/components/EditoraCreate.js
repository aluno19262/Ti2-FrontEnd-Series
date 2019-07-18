import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { linkApi } from "./Series.js";
import { Redirect } from 'react-router-dom'
//ficheiro de css das series
import '../Style/EditoraCreate.css';

class EditoraCreate extends Component {
    constructor() {
        super();
        this.state = {
            allow: true
        }
    }

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