import React from 'react';
import {connect} from 'react-redux';

export class StoryPreview extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                    <div className="story-thumbnail-container">
                        <a href="story.html"><img className="story-thumbnail" src={this.props.previewImage} alt="Thumbnail" width="100%" /></a>
                    </div>
                    <h2 className="story-preview-title">{this.props.title}</h2>
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

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(StoryPreview);


/*

<div className="container col1">
    <div className="story-preview inside-cont">
        <div className="story-thumbnail">
            <a href="story.html"><img src={require('../images/story2.jpg')} alt="Thumbnail" width="100%" /></a>
        </div>
        <h2 className="story-preview-title">The perfect base</h2>
        <p className="story-preview">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum.</p>
        <div className="story-preview-info">
            <i className="fa fa-user" aria-hidden="true"></i> Nick | <i className="fa fa-clock-o" aria-hidden="true"></i> 3 days ago | 1 comment
        </div>
    </div>
</div>
*/
