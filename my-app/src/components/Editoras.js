import React, { Component } from 'react';
import ListaEditoras from './ListaEditoras';



class Editoras extends Component {
  state = {
    isLoaded: false,
    editora: null,
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Editoras')
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
        <div style={DivStyle}>
            <ListaEditoras key={"serie" + this.state.editora.id} editora={this.state.editora} ></ListaEditoras>          
        </div>
      );
    }
  }
}

const DivStyle={
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap"
}

export default Editoras;