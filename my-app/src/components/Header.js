import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/Header.css';



class Header extends Component {

/* 
  Render: apresenta um HOME button que volta a pagina inicial "localhost:3000" e apresenta 3 links 
          em que cada 1 vai diretamente para a página das Séries, para a página das Editoras 
          e para a página das Pessoas 
*/

  render() {
    return (
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        <div className="home_btn">
          <Link to="/">{this.props.valor}</Link>
        </div>
        <div style={Dstyle}>
          <nav>
            <ul>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Series">Séries</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Editoras">Editoras</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Pessoas">Pessoas</Link></li>
            </ul>
          </nav>
        </div>
      </div >
    )
  }
}

/*
  constante auxiliar para css dos links
*/

const Dstyle = {
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  justifyContent: "center",
}



export default Header;