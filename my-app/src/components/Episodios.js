import React, { Component } from 'react';
import ListaEpisodios from './ListaEpisodios';



class Episodios extends Component {
  state = {
    isLoaded: false,
    episodio: null,
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Episodios/'+this.props.match.params.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          episodio: data
        })
        console.log(this.state.episodio)
      })

      .catch(console.log)
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={DivStyle}>
            <ListaEpisodios key={"serie" + this.state.episodio.id} episodio={this.state.episodio} ></ListaEpisodios>          
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

export default Episodios;