import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Comentarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,

      apiComment:null,
      
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/values/Comentarios/'+this.props.x)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          isLoaded:true,
          apiComment: data
        })
        console.log(this.state.apiComment)
      })

      .catch(console.log)
  }
  render() { console.log(this.props.x);
    if(!this.state.isLoaded){
      return <div>Loading...</div>
    }else if(this.state.apiComment.length>0){
      return this.state.apiComment.map((apiComment) => (<p>{apiComment.texto}</p>));
    }else{
      return (<p></p>);
    }
    
  }
}
export default Comentarios;