import React, { Component } from 'react';
import Header from './components/header.js';
import StoriesList from './components/stories-list.js';
import Story from './components/story.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
          <div className="App">
            <Header />
            <main>
                <Route exact path="/" component={StoriesList} />
                <Route exact path="/story/:id" component={Story} />
            </main>
          </div>
    </Router>
    );
  }
}

export default App;
/*

    <Redirect to="/" />

    */
