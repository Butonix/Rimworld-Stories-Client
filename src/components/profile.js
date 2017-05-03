import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';
import {fetchProfile} from '../actions';
import ProfileInfo from './profile-info';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
    }

    render() {
        const profileInfo = this.props.visitedProfile ? <ProfileInfo info={this.props.visitedProfile} currentUser={this.props.currentUser} /> : '';
        return (
            <div>
                {profileInfo}
                <a href={API_URL + '/auth/logout'}>Log out</a>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Profile);
