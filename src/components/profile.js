import React from 'react';
import {connect} from 'react-redux';
import {fetchProfile, resetProfile, fetchUser} from '../actions';
import ProfileInfo from './profile-info';
import MyPublishedStores from './story-my-published';
import UpdateUsername from './profile-update-username';
import UploadImage from './misc-upload-image.js';
import MyDrafts from './story-my-drafts';

export class Profile extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetProfile());
    }

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

    render() {
        let profileInfo = '', updateUsername = '', myPublishedStories = '',
        uploadProfilePicture = '', avatar = '', myDrafts = '';
        // when profile fetched
        if (this.props.visitedProfile) {
            avatar = <div className="container col1">
                <h2>{this.props.visitedProfile.username}</h2>
                <img alt='' className="profile-avatar" id="profile-avatar" src={this.props.visitedProfile.avatarUrl} />
            </div>;
            myPublishedStories = <MyPublishedStores stories={this.props.visitedProfile.stories || []} />;
        }
        // when profile fetched AND if profile is mine
        if (this.props.visitedProfile && this.props.match.params.id === this.props.currentUser.id) {
            avatar = <div className="container col1"><div className="inside-cont"><UploadImage image={this.props.currentUser.avatarUrl} folder='avatars' /></div></div>;
            profileInfo = <ProfileInfo info={this.props.currentUser} />;
            updateUsername = <UpdateUsername />;
            myDrafts = <MyDrafts stories={this.props.currentUser.stories} />;
        }

        return (
            <div>
                {profileInfo}
                {avatar}
                {updateUsername}
                {uploadProfilePicture}
                {myDrafts}
                {myPublishedStories}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Profile);
