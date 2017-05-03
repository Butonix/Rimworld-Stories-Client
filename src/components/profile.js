import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile, logOut} from '../actions';
import ProfileInfo from './profile-info';
import ProfileStoriesList from './profile-stories-list';
import UpdateUsername from './update-username';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
    }

    render() {
        let profileInfo = '', profileTitle = '', logoutButton = '', updateUsername = '', profileStoriesList = '';
        // when profile fetched
        if (this.props.visitedProfile) {
            profileTitle = <div className="container col1"><h3>{this.props.visitedProfile.username}</h3></div>;
            profileStoriesList = <ProfileStoriesList />;
        }
        // when profile fetched AND if profile is mine
        if (this.props.visitedProfile && this.props.match.params.id === this.props.currentUser.id) {
            profileTitle = <div className="container col1"><h3>{this.props.currentUser.userName}</h3></div>;
            profileInfo = <ProfileInfo info={this.props.visitedProfile} currentUser={this.props.currentUser} />;
            logoutButton = <div className="container col1"><div className="button" onClick={e => this.props.dispatch(logOut())}>Log out</div></div>;
            updateUsername = <UpdateUsername />;
        }

        return (
            <div>
                {profileTitle}
                {logoutButton}
                {profileInfo}
                {updateUsername}
                {profileStoriesList}
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Profile);
