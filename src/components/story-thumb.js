import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StoryAuthorInfo from './story-author-info.js';
import {defaultScreenshot} from '../utils.js';

export class StoryThumb extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">{this.props.story.title}</h2>
                    <div className="story-thumbnail-container">
                        <Link to={'/story/' + this.props.story._id}>
                            <img className="story-thumbnail" src={this.props.story.screenshot || defaultScreenshot} alt="" width="100%" />
                        </Link>
                    </div>
                    <p className="story-preview">{this.props.story.story}</p>
                    <StoryAuthorInfo
                        author={this.props.story.author}
                        datePosted={this.props.story.datePosted}
                        nbComments={this.props.story.comments.length}
                        nbViews={this.props.story.views}
                        nbStars={this.props.story.stars.length}
                    />
    			</div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryThumb);
