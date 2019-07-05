import React, { Component } from 'react';
import ListaPessoas from './ListaPessoas';

import '../Style/wrapper.css';

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
        <div className="wp">
          <div className="_wrapper">
            <div className="size">
              <ListaPessoas key={"serie" + this.state.pessoa.id} pessoa={this.state.pessoa} ></ListaPessoas>
            </div>
          </div>
        </div>

      );
    }
  }
}


export default Pessoas;