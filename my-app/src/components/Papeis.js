import React, { Component } from 'react';
import ListaPapeis from './ListaPapeis';



class Papeis extends Component {
  state = {
    isLoaded: false,
    papel: null,
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Papeis')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          papel: data
        })
        console.log(this.state.papel)
      })

      .catch(console.log)
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={DivStyle}>
            <ListaPapeis key={"serie" + this.state.papel.id} papel={this.state.papel} ></ListaPapeis>          
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

export default Papeis;