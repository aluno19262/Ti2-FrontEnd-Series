import React, { Component } from 'react';
import ListaTemporadas from './ListaTemporadas';



class Temporadas extends Component {
  constructor(props){
    super(props);
  this.state = {
    isLoaded: false,
    temporada: null,
  
    };
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/values/Temporadas/'+this.props.match.params.id)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          temporada: data
        })
        console.log(this.state.temporada)
      })

      .catch(console.log)
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={DivStyle}>
            <ListaTemporadas key={"serie" + this.state.temporada.id} temporada={this.state.temporada} ></ListaTemporadas>          
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
export default Temporadas;