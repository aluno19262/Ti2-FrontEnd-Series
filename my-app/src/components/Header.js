import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../Style/Header.css';



class Header extends Component {

  state={
    hasContent:false
  }

  handleClick = () => {
    this.setState({
        hasContent:!this.state.hasContent
    })
  }

/* 
  Render: apresenta um HOME button que volta a pagina inicial "localhost:3000" e apresenta 3 links 
          em que cada 1 vai diretamente para a página das Séries, para a página das Editoras 
          e para a página das Pessoas 
*/

  render() {
    let aux = !this.state.hasContent 
    return (
      <React.Fragment>
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
        {aux?(<React.Fragment></React.Fragment>):(<div className="home_btn">
          <Link to="/" onClick={this.handleClick}>{this.props.valor}</Link>
        </div>)}
        
        <div style={Dstyle}>
          <nav>
            <ul>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Series" onClick={this.handleClick}>Séries</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Editoras" onClick={this.handleClick}>Editoras</Link></li>
              <li><Link style={{ textDecoration: "none", color: "black", flex: 1 }} to="/Pessoas" onClick={this.handleClick}>Pessoas</Link></li>
            </ul>
          </nav>
        </div>
      </div >
      {aux?(<div className="titulo_App">
          <h1>Series4All</h1>
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