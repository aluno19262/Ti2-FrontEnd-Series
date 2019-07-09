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
    let home = window.location.pathname == "/" ? true : false;
    return (
      <React.Fragment>
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
        {home ?(<React.Fragment></React.Fragment>):(<div className="home_btn">
          <Link to="/" onClick={e => this.setState({ hasContent: false })}>{this.props.valor}</Link>
        </div>)}
        
        <div style={Dstyle}>
          <nav>
            <ul>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Series" onClick={e => this.setState({ hasContent: true })}>Séries</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Editoras" onClick={e => this.setState({ hasContent: true })}>Editoras</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Pessoas" onClick={e => this.setState({ hasContent: true })}>Pessoas</Link></li>
            </ul>
          </nav>
        </div>
      </div >
      {home ?(<div className="titulo_App">
          <h1>Séries4All</h1>
          <img src="../Imagens/balde.png"></img>
      </div>):(<React.Fragment></React.Fragment>)}
      </React.Fragment>
      
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