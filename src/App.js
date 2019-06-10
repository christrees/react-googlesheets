import React, { Component } from 'react';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1BgZC4D7CrvjeOWlgwQ81u_E5qdLEqpdrn5XYpLVsfJs',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CAT9 React + Google Sheets Demo</h1>
        </header>
        <div id="employee-details">
          {
            data.map(obj => {
             return (
              <div key={obj.toolbox}>
                <p>{obj.toolbox}</p>
                <p>{obj.location}</p>
                <img alt={obj.location} src={obj.img} />
              </div>
            )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
