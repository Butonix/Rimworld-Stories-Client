import React from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone'
import {setMessage, uploadImage} from '../actions';

export class UploadImage extends React.Component {

    onDrop(acceptedFiles, rejectedFiles) {
        if (acceptedFiles.length > 0) {
            let data = new FormData();
            data.append('folder', this.props.folder);
            data.append('file', acceptedFiles[0]);
            if (this.props.folder === 'avatars') {
                data.append('transformation', JSON.stringify([
                    {width: 400, height: 400, gravity: "face", crop: "crop"},
                    {width: 200, crop: "scale"}
                ]));
            } else if (this.props.folder === 'screenshots') {
                data.append('transformation', JSON.stringify([
                    {width: 500, crop: "scale"}
                ]));
                data.append('storyID', this.props.currentDraft._id);
            }
            this.props.dispatch(uploadImage(data));
        } else {
            this.props.dispatch(setMessage('Invalid file format', 'error-message'));
        }
    }

    imgClass(folder) {
        if (folder === 'avatars') {
            return 'profile-avatar'
        } else if (folder === 'screenshots') {
            return 'screenshot-preview'
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
                        <img alt='' className={this.imgClass(this.props.folder)} src={this.props.image} />
                        <p className="small">Click here or drag a file to upload a new image (JPEG or PNG)</p>
                    </Dropzone>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(UploadImage);
