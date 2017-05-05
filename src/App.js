import React, { Component } from 'react';
import Header from './components/header.js';
import StoriesList from './components/stories-list.js';
import Story from './components/story.js';
import Profile from './components/profile.js';
import NewStory from './components/new-story.js';
import Login from './components/login.js';
import Alert from './components/alert.js';
import Loading from './components/loading.js';
import { Route } from 'react-router'
import {fetchUser} from './actions';
import {connect} from 'react-redux';
import {history} from './store';

import { ConnectedRouter } from 'react-router-redux';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

  render() {
    const message = this.props.alert.message ? <Alert /> : '';
    const loading = this.props.loading ? <Loading /> : '';
    return (
    <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            {message}
            {loading}
            <main>
                <Route exact path="/" component={StoriesList} />
                <Route exact path="/story/:id" component={Story} />
                <Route exact path="/profile/:id" component={Profile} />
                <Route exact path="/new-story" component={NewStory} />
                <Route exact path="/login" component={Login} />
            </main>
          </div>
    </ConnectedRouter>
    );
  }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(App);

//    <Redirect to="/" />
