import React, { Component } from 'react';
import ListaSeries from './ListaSeries';



class Series extends Component {
  state = {
    isLoaded: false,
    serie: null,
    valor:"Séries"
  }


  componentDidMount() {
    fetch('https://localhost:5001/api/values/Series')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          serie: data
        })
        console.log(this.state.serie)
      })

      .catch(console.log)
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div style={DivStyle}>
          <div style={DivStyle1}>
            <ListaSeries key={"serie" + this.state.serie.id} serie={this.state.serie} ></ListaSeries>
          </div>
          
        </div>
      );
    }
  }
}

const DivStyle={
  display:"flex",
  flexDirection:"column"
}
const DivStyle1={
  display:"flex",
  flexDirection:"row"
}
export default Series;