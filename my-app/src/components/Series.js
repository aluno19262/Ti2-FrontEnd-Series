import React, { Component } from 'react';
import ListaSeries from './ListaSeries';

import '../Style/wrapper.css';

export const linkApi = "http://localhost:5000"

class Series extends Component {
  state = {
    isLoaded: false,
    serie: null,
    valor:"Séries",
    
  }

  componentDidMount() {
    fetch(linkApi + '/api/values/Series')
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
        <React.Fragment>
          <p className="title">Lista de Séries</p>
          <div className="wp">
            <div className="_wrapper">
              <ListaSeries key={"serie" + this.state.serie.id} 
                serie={this.state.serie}>
              </ListaSeries>
            </div>        
          </div>
        </React.Fragment>    
      );
    }
  }
}

export default Series;