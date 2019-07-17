import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import {linkApi}from "./Series.js";
import  { Redirect } from 'react-router-dom'
//ficheiro de css das series
import '../Style/EditoraUpdate.css';

class EditoraUpdate extends Component {


    constructor() {
        super();
        this.state={
            allow:true
        }
      }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const url = linkApi + '/api/values/Update/'
        const data = new FormData(evt.target);
        console.log(data)
        console.log(this.props.location.state.id)
        fetch(url+ this.props.location.state.id , {
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

  render() {
      if(!this.state.allow){
        return <Redirect to="/Editoras" ></Redirect>
      }else{
          return (    
              <React.Fragment>
                <div className="editora_Update_titulo">Editar Editora</div>
          <div className="editora_Update_content_wrapper">
              <form encType="multipart/form-data" onSubmit={(evt) => { this.handleSubmit(evt) }}>
              <div className="editora_Update_info">
                  <span>Nome :</span>
                  <input type="text" name ="Nome" id="Nome"></input>
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