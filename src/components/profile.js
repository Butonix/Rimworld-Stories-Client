import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile, logOut} from '../actions';
import ProfileInfo from './profile-info';
import ProfileStoriesList from './profile-stories-list';
import UpdateUsername from './update-username';
import UploadProfilePicture from './upload-profile-picture';

export class Profile extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
    }

    render() {
        let profileInfo = '', profileTitle = '', logoutButton = '', updateUsername = '', profileStoriesList = '', uploadProfilePicture = '', avatar = '';
        // when profile fetched
        if (this.props.visitedProfile) {
            avatar = <div className="container col1"><img alt='' className="profile-avatar" id="profile-avatar" src={this.props.visitedProfile.avatarUrl} /></div>
            profileTitle = <div className="container col1"><h3>{this.props.visitedProfile.username}</h3></div>;
            profileStoriesList = <ProfileStoriesList />;
        }
        // when profile fetched AND if profile is mine
        if (this.props.visitedProfile && this.props.match.params.id === this.props.currentUser.id) {
            avatar = <UploadProfilePicture avatar={this.props.currentUser.avatarUrl} />;
            profileTitle = <div className="container col1"><h3>{this.props.currentUser.userName}</h3></div>;
            profileInfo = <ProfileInfo info={this.props.currentUser} />;
            logoutButton = <div className="container col1"><div className="button" onClick={e => this.props.dispatch(logOut())}>Log out</div></div>;
            updateUsername = <UpdateUsername />;
        }

        return (
            <div>
                {profileTitle}
                {avatar}
                {logoutButton}
                {profileInfo}
                {updateUsername}
                {uploadProfilePicture}
                {profileStoriesList}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Profile);
