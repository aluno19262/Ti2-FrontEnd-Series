import React, { Component } from 'react';
import ListaPapeis from './ListaPapeis';

import '../Style/wrapper.css';

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
        <div>
            <ListaPapeis key={"serie" + this.state.papel.id} papel={this.state.papel} ></ListaPapeis>          
        </div>
      );
    }
  }
}


export default Papeis;