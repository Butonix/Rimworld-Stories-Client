import React from 'react';
import {connect} from 'react-redux';
import {submitNewUsername} from '../actions';

export class UpdateUsername extends React.Component {

    submitEvent(e) {
        e.preventDefault();
        if (e.target.newUsername.value) {
            this.props.dispatch(submitNewUsername(e.target.newUsername.value));
        }
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    You can change your username here: <br />
                    <form onSubmit={e => this.submitEvent(e)}>
                        <input type="text" id="newUsername" /><br />
                        <button type="submit" className="button">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(UpdateUsername);
