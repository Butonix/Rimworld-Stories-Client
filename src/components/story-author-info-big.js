import React from 'react';
import {connect} from 'react-redux';
import {displayDate} from '../utils.js';

function StoryAuthorInfo(props) {
    function nbViews(nb) {
        if (nb) {
            return  (
                <span><i className="fa fa-eye" aria-hidden="true"></i> {nb}</span>
            )
        }
    }
    function nbStars(nb) {
        if (nb) {
            return  (
                <span><span className="info-separator"> | <i className="fa fa-star" aria-hidden="true"></i></span> {nb}</span>
            )
        }
    }
    return (
            <div className="story-preview-info">
                <div className="comment-author comment">
                    <div>
                        <img alt='' src={props.author.avatarUrl} className='profile-avatar story-avatar'/>
                    </div>

                </div>

                <div className="comment-top-bar">
                    {nbViews(props.nbViews)}
                    {nbStars(props.nbStars)}
                </div>
                <div className="comment-top-bar">
                    <span className="right">
                        <span className="date right">{displayDate(props.datePosted)}</span>
                    </span>
                </div>
            </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryAuthorInfo);
