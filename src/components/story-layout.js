import React from 'react';
import {connect} from 'react-redux';
import {defaultScreenshot} from '../utils.js';
import StoryAuthorInfo from './story-author-info.js';

function StoryLayout(props) {
    return (
        <div className="story-preview inside-cont">
            <h2 className="story-preview-title">{props.story.title}</h2>
            <div><img className='story-screenshot' alt='' src={props.story.screenshot || defaultScreenshot} /></div>
            <div>{props.story.story}</div>
            <StoryAuthorInfo
                author={props.story.author}
                datePosted={props.story.datePosted}
                nbComments={props.story.comments.length}
            />
        </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryLayout);