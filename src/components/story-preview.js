import React from 'react';
import {connect} from 'react-redux';

export class StoryPreview extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">{this.props.title}</h2>
                    <div className="story-thumbnail-container">
                        <a href={'/story/' + this.props.id}>
                            <img className="story-thumbnail" src={this.props.previewImage} alt="Thumbnail" width="100%" />
                        </a>
                    </div>
                    <p className="story-preview">{this.props.shortText}</p>
                    <div className="story-preview-date">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <span className="info-separator"> </span>
                        {this.props.author}
                        <span className="info-separator"> | </span>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="info-separator"> </span>
                        {this.props.posted}
                        <span className="info-separator"> | </span>
                        {this.props.nbComments} comments
                    </div>
    			</div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryPreview);
