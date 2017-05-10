import React from 'react';
import {connect} from 'react-redux';
import {displayDate} from '../utils.js';

function StoryAuthorInfo(props) {
    return (
            <div className="story-preview-info">
                <img alt='' src={props.author.avatarUrl} className='profile-avatar small-thumb'/>
                <span className="info-separator"> </span>
                {props.author.username}
                <span className="info-separator"> | </span>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span className="info-separator"> </span>
                {displayDate(props.datePosted)}
                <span className="info-separator"> | </span>
                {props.nbComments} comments
            </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryAuthorInfo);
