import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/Header.css';



class Header extends Component {

  render() {

    console.log(this.props.valor);

      return (
        
          <div style={{width:"100%" , height:"300px",margin: 0,
	padding: 0}}>
            <div className="home_btn">
              <Link to="/">{this.props.valor}</Link>
            </div>
            <div style={Dstyle}>
              <nav>
                <ul>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Series">Séries</Link></li>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Editoras">Editoras</Link></li>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Pessoas">Pessoas</Link></li>
                </ul>
              </nav>
            </div>
          </div >



      )
    

  }
}



const Dstyle = {
  display:"flex",
  flexDirection: "row",
  padding: "20px",
  justifyContent: "center",
}



export default Header;