import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';
import {fetchUser, logIn} from '../actions';
import {buttonDisableOnLoading, buttonContent} from '../utils';

export class Landing extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    submitLogin(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('email', e.target.loginemail.value);
        data.append('password', e.target.loginpw.value);
        this.props.dispatch(logIn(data));
    }

    render() {
        return (
            <div>
                <div className="container col1">
        			<div className="inside-cont">
                        <h3>Welcome to Rimworld Stories</h3>
                        <div className="landing-text">
                            <p><a href='https://rimworldgame.com/'>Rimworld</a> is a sci-fi colony sim driven by an intelligent AI storyteller. Each game you play is full of surprises,
                            incredible interactions, hilarious events, dramatic misfortunes and heroic actions.</p>
                            <p>I love reading these stories, as each one has its special grain of salt, and you can find them all over the internet.
                            But here is the thing: there is no central place for them to be gathered. This is why I have created <strong>Rimworld Stories</strong>,
                            a website for all Rimworld players to post their stories on.</p>
                            <p>A test account has been automatically selected for you below, just click Sign in. Feel free
                            to try all the features.</p>
                        </div>
                    </div>
                </div>
                <div className="container col1">
        			<div className="inside-cont">
                    <h3>Test account login</h3>
                        <form name="loginform" className="log-in" onSubmit={(e) => {if (!this.props.loading) {this.submitLogin(e)}}}>
                            <p><input readOnly required="true" id="loginemail" defaultValue="testaccount@test.com" placeholder="E-mail" type="email" className="form-element" /></p>
                            <p><input readOnly required="true" id="loginpw" defaultValue="abc123" placeholder="Password" type="password" className="form-element" /></p>
                            <p>
                                <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                    {buttonContent('Sign in', this.props.loading)}
                                </button>
                            </p>
                            <p><strong className="or">or</strong></p>
                            <p><a href={API_URL + '/auth/facebook'}>
                                <span className="button facebook"><i className="fa fa-facebook-official" aria-hidden="true"/> Sign in with facebook</span>
                            </a></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Landing);
