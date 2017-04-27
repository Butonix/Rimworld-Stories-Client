import React, { Component } from 'react';
import Header from './components/header.js';
import StoriesList from './components/stories-list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StoriesList />
      </div>
    );
  }
}

export default App;
