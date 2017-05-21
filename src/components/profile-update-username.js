import React from 'react';
import {connect} from 'react-redux';
import {submitNewUsername} from '../actions';
import {buttonDisableOnLoading, buttonContent} from '../utils';

export class UpdateUsername extends React.Component {

    submitEvent(e) {
        e.preventDefault();
        if (e.target.newUsername.value && !this.props.loading) {
            this.props.dispatch(submitNewUsername(e.target.newUsername.value));
            e.target.newUsername.value = '';
        }
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>Change username</h4>
                    <form onSubmit={e => this.submitEvent(e)}>
                        <p>
                            <input className="form-element change-username" autoComplete="off" type="text" id="newUsername" /><br />
                        </p>
                        <p>
                            <button type="submit" className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                                {buttonContent('Submit', this.props.loading)}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(UpdateUsername);
