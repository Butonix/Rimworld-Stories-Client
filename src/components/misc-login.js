import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';
import {fetchUser, toggleDisplayLogin, logIn, signUp} from '../actions';
import {buttonDisableOnLoading, buttonContent} from '../utils';

export class Login extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    toggleDisplay() {
        if (document.loginform) {
            document.loginform.reset();
        }
        if (document.signupform) {
            document.signupform.reset();
        }
        this.props.dispatch(toggleDisplayLogin());
    }

    submitLogin(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('email', e.target.loginemail.value);
        data.append('password', e.target.loginpw.value);
        this.props.dispatch(logIn(data));
    }

    submitSignUp(e) {
        e.preventDefault();
        console.log(e.target.signupusername.value)
        let data = new FormData();
        data.append('username', e.target.signupusername.value);
        data.append('email', e.target.signupemail.value);
        data.append('password', e.target.signuppw.value);
        this.props.dispatch(signUp(data));
    }

    displaySection() {
        if (this.props.loginShow) {
            return (
                <div className="container col1">
        			<div className="inside-cont">
                    <h3>Log in</h3>
                        <form name="loginform" className="log-in" onSubmit={(e) => {if (!this.props.loading) {this.submitLogin(e)}}}>
                            <input hidden />
                            <p><input required="true" id="loginemail" placeholder="E-mail" type="email" className="form-element" /></p>
                            <p><input required="true" id="loginpw" placeholder="Password" type="password" className="form-element" /></p>
                            <p>
                                <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                    {buttonContent('Submit', this.props.loading)}
                                </button>
                            </p>
                            <p><strong className="or">or</strong></p>
                            <p><a href={API_URL + '/auth/facebook'}>
                                <span className="button facebook"><i className="fa fa-facebook-official" aria-hidden="true"/> Sign in with facebook</span>
                            </a></p>
                            <p>Don't have an account yet? <span onClick={e => this.toggleDisplay()} className="fake-link"><strong>Create a new one</strong></span>.</p>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container col1">
        			<div className="inside-cont">
                    <h3>Create a new account</h3>
                        <form name="signupform" className="log-in" onSubmit={(e) => {if (!this.props.loading) {this.submitSignUp(e)}}}>
                            <p><input required="true" id="signupusername" placeholder="Username" type="text" className="form-element" /></p>
                            <p><input required="true" id="signupemail" placeholder="E-mail" type="email" className="form-element" /></p>
                            <p><input required="true" id="signuppw" placeholder="Password" type="password" className="form-element" /></p>
                            <p>
                                <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                    {buttonContent('Submit', this.props.loading)}
                                </button>
                            </p>
                            <p><strong className="or">or</strong></p>
                            <p><a href={API_URL + '/auth/facebook'}>
                                <span className="button facebook"><i className="fa fa-facebook-official" aria-hidden="true"/> Sign up with facebook</span>
                            </a></p>
                            <p>Already have an account? <span onClick={e => this.toggleDisplay()} className="fake-link"><strong>Sign in</strong></span>.</p>
                        </form>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.displaySection()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Login);
