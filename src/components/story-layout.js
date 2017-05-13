import React from 'react';
import {connect} from 'react-redux';
import {defaultScreenshot} from '../utils.js';
import StoryAuthorInfoBig from './story-author-info-big.js';

function StoryLayout(props) {

    function story() {
        return props.story.story.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })
    }

    return (
        <div className="story-preview inside-cont">
            <h2 className="story-preview-title">{props.story.title}</h2>
            <div><img className='story-screenshot' alt='' src={props.story.screenshot || defaultScreenshot} /></div>
            <p className="story-content">{story()}</p>
            <p><strong>{props.story.author.username}</strong></p>
            <StoryAuthorInfoBig
                author={props.story.author}
                datePosted={props.story.datePosted}
                nbComments={props.story.comments.length}
                nbViews={props.story.views}
                nbStars={props.story.stars.length}
            />
        </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryLayout);
