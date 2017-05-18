import React from 'react';
import Header from './components/ui-header.js';
import StoriesList from './components/story-home-list.js';
import Story from './components/story.js';
import Profile from './components/profile.js';
import NewStory from './components/story-new-story.js';
import Login from './components/misc-login.js';
import Alert from './components/ui-alert.js';
import Loading from './components/ui-loading.js';
import Landing from './components/misc-landing.js';
import { Route } from 'react-router';
import {connect} from 'react-redux';
import {history} from './store';
import Favicon from 'react-favicon';

import { ConnectedRouter } from 'react-router-redux';

  function App(props) {
    const alert = props.alert.message ? <Alert /> : '';
    const loading = props.loading ? <Loading /> : '';
    return (
    <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            <Favicon url={[require('./favicon.ico')]}/>
            <div className="fixed-ui">
                {alert}
                {loading}
            </div>
            <main>
                <Route exact path="/" component={StoriesList} />
                <Route exact path="/story/:id" component={Story} />
                <Route exact path="/profile/:id" component={Profile} />
                <Route exact path="/write-story/:id" component={NewStory} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/landing" component={Landing} />
            </main>
          </div>
    </ConnectedRouter>
    );
  }

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(App);

//    <Redirect to="/" />
