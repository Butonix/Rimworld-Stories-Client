import React from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {setMessage} from '../actions';

export class UploadProfilePicture extends React.Component {

    submitEvent(e) {
        e.preventDefault();
        if (e.target.newAvatar.value) {
            console.log(e.target.newUsername.value);
        }
    }

    onDrop(acceptedFiles, rejectedFiles) {
        if (acceptedFiles.length > 0) {
            console.log(acceptedFiles[0]);
            this.props.dispatch(setMessage('Valid', 'alert-message'));
        } else {
            this.props.dispatch(setMessage('Invalid file format', 'error-message'));
        }
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    Upload a new profile picture: <br />
                    <Dropzone
                        multiple={false}
                        onDrop={(a, r) => this.onDrop(a, r)}
                        disablePreview={false}
                        accept="image/*"
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(UploadProfilePicture);
