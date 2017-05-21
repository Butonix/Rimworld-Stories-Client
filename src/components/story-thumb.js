import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StoryAuthorInfo from './story-author-info.js';
import {defaultScreenshot} from '../utils.js';

export class StoryThumb extends React.Component {

    storyPreview() {
        if (this.props.story.story.length > 250) {
            return (
                <div>
                    {this.props.story.story.slice(0, 250)}
                    <Link to={"/story/" + this.props.story._id}> ...Read more</Link>
                </div>
            )
        }
        return this.props.story.story
    }
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">{this.props.story.title}</h2>
                    <div className="story-thumbnail-container screenshot-thumb-container">
                        <Link to={'/story/' + this.props.story._id}>
                            <img className="story-thumbnail" src={this.props.story.screenshot || defaultScreenshot} alt="" />
                        </Link>
                    </div>
                    <div className="par story-preview">{this.storyPreview()}</div>
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
