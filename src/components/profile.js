import React from 'react';
import {connect} from 'react-redux';

export class Profile extends React.Component {
    render() {
        return (
            <div className="container col1">
                User name: {this.props.currentUser.userName} <br />
                Email: {this.props.currentUser.email} <br />
                <a href={this.props.apiUrl + '/auth/logout'}>Log out</a>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Profile);
