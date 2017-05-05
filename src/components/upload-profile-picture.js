import React from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {setMessage, uploadImage} from '../actions';

export class UploadProfilePicture extends React.Component {

    onDrop(acceptedFiles, rejectedFiles) {
        if (acceptedFiles.length > 0) {
            let data = new FormData();
            data.append('file', acceptedFiles[0]);
            data.append('user', this.props.currentUser.id);
            this.props.dispatch(uploadImage(data));
        } else {
            this.props.dispatch(setMessage('Invalid file format', 'error-message'));
        }
    }

    render() {
        return (
            <div className="container col1">
                    <Dropzone
                        className="dropzone"
                        onDrop={(a, r) => this.onDrop(a, r)}
                        disablePreview={true}
                        accept="image/jpeg, image/png, image/jpg"
                    >
                        <img alt='' className="profile-avatar" id="profile-avatar" src={this.props.avatar} />
                        <p className="small">Click here or drag a file to upload a new avatar. JPEG or PNG</p>
                    </Dropzone>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(UploadProfilePicture);
