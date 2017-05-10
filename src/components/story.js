import React from 'react';
import {connect} from 'react-redux';
import NewComment from './story-new-comment.js';
import Comment from './story-comment.js';
import StoryLayout from './story-layout.js'
import {resetCurrentStory, fetchUser, fetchStory} from '../actions';

export class Story extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetCurrentStory());
    }

    componentDidMount() {
        this.props.dispatch(fetchStory(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

    story() {
        if (this.props.currentStory._id) {
            return (
                <div className="container col1">
        			<StoryLayout story={this.props.currentStory} />
                    <h3>COMMENTS</h3>
                    <NewComment />
                    <Comment user="Nick" comment="blahblahablah" />
                    <Comment user="Roger" comment="It's cool" />
                </div>
            )
        }
        return ''
    }

    render() {
        return (
            <div>
                {this.story()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Story);
