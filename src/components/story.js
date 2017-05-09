import React from 'react';
import {connect} from 'react-redux';
import NewComment from './story-new-comment.js';
import Comment from './story-comment.js';
import {resetCurrentStory, fetchUser, fetchStory} from '../actions';

export class Story extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetCurrentStory());
    }

    componentDidMount() {
        this.props.dispatch(fetchStory(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

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
