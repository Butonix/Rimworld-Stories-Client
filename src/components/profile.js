import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';

export class Profile extends React.Component {
    render() {
        return (
            <div className="container col1">
                User name: {this.props.currentUser.userName} <br />
                Email: {this.props.currentUser.email} <br />
                <a href={API_URL + '/auth/logout'}>Log out</a>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Profile);
