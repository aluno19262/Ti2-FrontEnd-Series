import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Series from './Series';
import Temporadas from './Temporadas';
import Episodios from './Episodios';
import '../Style/Header.css';



class Header extends Component {

  render() {

    console.log(this.props.valor);

      return (
        <Router>
          <div style={{width:"100%" , height:"300px",margin: 0,
	padding: 0}}>
            <div>
              <h1>{this.props.valor}</h1>
            </div>
            <div style={Dstyle}>
              <nav>
                <ul>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Series">Séries</Link></li>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Temporadas">Temporadas</Link></li>
                  <li><Link style={{textDecoration: "none",color:"black",flex:1}} to="/Episodios">Episódios</Link></li>
                </ul>
              </nav>
            </div>
          </div >
          <Route path="/Temporadas/" component={Temporadas} />
          <Route path="/Series/" component={Series} />
          <Route path="/Episodios/" component={Episodios} />
        </Router>


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