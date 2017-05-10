import React from 'react';
import {connect} from 'react-redux';
import NewComment from './story-new-comment.js';
import Comment from './story-comment.js';
import StoryLayout from './story-layout.js';
import StoryOptions from './story-options.js';
import StoryConfirmDelete from './story-confirm-delete.js';
import {resetCurrentStory, fetchUser, fetchStory} from '../actions';

export class Story extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetCurrentStory());
    }

    componentDidMount() {
        this.props.dispatch(fetchStory(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

    newCommentBlock() {
        if (this.props.currentUser.id) {
            return (<NewComment />)
        }
        return ''
    }

    comments() {
        if (this.props.currentStory._id) {
            const comments = this.props.currentStory.comments.map((comment) => {
                return (<Comment key={comment._id} comm={comment} />)
            })
            return comments
        }
        return ''
    }

    story() {
        if (this.props.currentStory._id) {
            return (
                <div className="container col1">
        			<StoryLayout story={this.props.currentStory} />
                </div>
            )
        }
        return ''
    }

    commentHeader() {
        if (this.props.currentStory._id) {
            function countText(nb) {
                if (nb === 0) {
                    return 'No comment posted yet'
                } else if (nb === 1) {
                    return '1 comment'
                } else {
                    return nb + ' comments'
                }
            }
            return (
                <div className="container col1">
                    <h3>{countText(this.props.currentStory.comments.length)}</h3>
                </div>
            )
        }
        return ''
    }

    storyAuthorOptions() {
        if (this.props.currentStory._id && this.props.currentStory.author._id === this.props.currentUser.id) {
            return (<StoryOptions />)
        }
    }

    storyConfirmDelete() {
        if (this.props.currentStory._id && this.props.currentStory.author._id === this.props.currentUser.id && this.props.currentStory.confirmDelete) {
            return (<StoryConfirmDelete />)
        }
    }

    render() {
        return (
            <div>
                {this.storyAuthorOptions()}
                {this.storyConfirmDelete()}
                {this.story()}
                {this.commentHeader()}
                {this.comments()}
                {this.newCommentBlock()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Story);
