import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/BusinessList/BusinessList.js';
import './components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          {this.SearchBar}
          {this.BusinessList}
      </div>
    );
  }
}

export default App;
