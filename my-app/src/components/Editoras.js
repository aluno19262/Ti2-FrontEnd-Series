import React, { Component } from 'react';
import ListaEditoras from './ListaEditoras';

import '../Style/wrapper.css';

class Editoras extends Component {
  state = {
    isLoaded: false,
    editora: null,
  }


  componentDidMount() {
    fetch('http://localhost:5000/api/values/Editoras')
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
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
            <ListaEditoras key={"serie" + this.state.editora.id} editora={this.state.editora} ></ListaEditoras>          
        </div>
      );
    }
  }
}


export default Editoras;