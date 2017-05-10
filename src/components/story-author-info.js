import React from 'react';
import {connect} from 'react-redux';
import {displayDate} from '../utils.js';

function StoryAuthorInfo(props) {
    function nbComments(nb) {
        console.log(nb)
        if (nb && nb > 0) {
            return  (
                <span className="info-separator"> | {nb} comments</span> 
            )
        }
    }
    return (
            <div className="story-preview-info">
                <img alt='' src={props.author.avatarUrl} className='profile-avatar small-thumb'/>
                <span className="info-separator"> </span>
                {props.author.username}
                <span className="info-separator"> | </span>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span className="info-separator"> </span>
                {displayDate(props.datePosted)}
                {nbComments(props.nbComments)}
            </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryAuthorInfo);
