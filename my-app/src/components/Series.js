import React, { Component } from 'react';

class Series extends Component {
    state = {
        isLoaded:false,
        serie: null
        
      }
      
    
      componentDidMount() {
        fetch('https://localhost:5001/api/values/Series')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            isLoaded:true,
            serie: data
           })
          console.log(this.state.serie)
        })
        
        .catch(console.log)
      }
render(){
    if(!this.state.isLoaded){
        return <div>Loading...</div>
      }else{
    return this.state.serie.map((serie) => (
    <div className="App">
     <p >{serie.nome}</p>
    </div>
  ));
}
}
}
export default Series;