import React from 'react';
import {connect} from 'react-redux';
import NewComment from './new-comment.js';
import Comment from './comment.js'

export class Story extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                    <h2 className="story-preview-title">Story ID : {this.props.match.params.id}</h2>
                    <a href="/">Back</a>
    			</div>
                <h2>COMMENTS</h2>
                <NewComment />
                <Comment user="Nick" comment="blahblahablah" />
                <Comment user="Roger" comment="It's cool" />
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Story);
