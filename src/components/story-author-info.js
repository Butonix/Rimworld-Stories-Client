import React from 'react';
import {connect} from 'react-redux';
import {displayDate} from '../utils.js';
import {Link} from 'react-router-dom';

function StoryAuthorInfo(props) {
    function nbComments(nb) {
        if (nb && nb > 0) {
            return  (
                <span className="info-separator"> | {nb} comments</span>
            )
        }
    }
    function nbViews(nb) {
        if (nb) {
            return  (
                <span className="info-separator"> | <i className="fa fa-eye" aria-hidden="true"></i> {nb}</span>
            )
        }
    }
    function nbStars(nb) {
        if (nb) {
            return  (
                <span className="info-separator"> | <i className="fa fa-star" aria-hidden="true"></i> {nb}</span>
            )
        }
    }
    return (
            <div className="story-preview-info">
                <img alt='' src={props.author.avatarUrl} className='profile-avatar small-thumb'/>
                <span className="info-separator"> </span>
                <Link to={'/profile/' + props.author._id} className="fake-link">{props.author.username}</Link>
                <span className="info-separator"> </span>
                {nbComments(props.nbComments)}
                {nbViews(props.nbViews)}
                {nbStars(props.nbStars)}
                <span className="date right">{displayDate(props.datePosted)}</span>
            </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryAuthorInfo);
