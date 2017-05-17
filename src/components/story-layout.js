import React from 'react';
import {defaultScreenshot} from '../utils.js';
import StoryAuthorInfoBig from './story-author-info-big.js';
import {Link} from 'react-router-dom';

function StoryLayout(props) {

    function story() {
        return props.story.story.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>
        })
    }

    return (
        <div className="story-preview inside-cont">
            <h2 className="story-preview-title">{props.story.title}</h2>
            <div className="story-screenshot-container"><img className='story-screenshot' alt='' src={props.story.screenshot || defaultScreenshot} /></div>
            <p className="story-content">{story()}</p>
            <p className="story-author-name">By <strong><Link to={'/profile/' + props.story.author._id} className="fake-link">{props.story.author.username}</Link></strong></p>
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

export default StoryLayout;
