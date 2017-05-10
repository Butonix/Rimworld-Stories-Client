import React from 'react';
import {connect} from 'react-redux';
import StoryAuthorInfo from './story-author-info.js';

function Comment(props) {
    return (
        <div className="container col1">
            <div className="inside-cont">
                <div>
                    {props.comm.comment}
                </div>
                <StoryAuthorInfo
                    author={props.comm.author}
                    datePosted={props.comm.datePosted}
                />
            </div>
        </div>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Comment);
