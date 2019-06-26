import React, { Component } from 'react';
import ListaPessoas from './ListaPessoas';



class Pessoas extends Component {
  state = {
    isLoaded: false,
    pessoa: null,
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Pessoas')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          pessoa: data
        })
        console.log(this.state.pessoa)
      })

      .catch(console.log)
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={DivStyle}>
            <ListaPessoas key={"serie" + this.state.pessoa.id} pessoa={this.state.pessoa} ></ListaPessoas>          
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

export default Pessoas;