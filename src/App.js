import React, { Component } from 'react';
import Header from './components/header.js';
import StoriesList from './components/stories-list.js';
import Story from './components/story.js';
import Profile from './components/profile.js';
import NewStory from './components/new-story.js';
import Login from './components/login.js';
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
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/new-story" component={NewStory} />
                <Route exact path="/login" component={Login} />
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
