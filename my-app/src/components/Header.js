import React, { Component } from 'react';



class Header extends Component {

  render() {
    console.log(this.props.valor);
      if(this.props.valor==="HOME"){
        return (
            <div>
                <header style={HeaderStyle}>{this.props.valor}</header>
            </div>
            )
      }else{
             return (
    <div>
        <header style={HeaderStyle}>{"Lista de "+this.props.valor}</header>
    </div>
    ) 
      }

  }
}

const HeaderStyle= {
    position:"relative",
    overflow:"hidden",
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "flex-start",
    height:"100px",
    minWidth:"300px",
    paddingTop: "50px",
    fontSize: "50px"
   
  }
  


export default Header;