import React from 'react';
import {connect} from 'react-redux';
import NewComment from './comment-new.js';
import Comment from './comment.js';
import StoryLayout from './story-layout.js';
import StoryOptions from './story-options.js';
import StoryConfirmDelete from './story-confirm-delete.js';
import {resetCurrentStory, fetchUser, fetchStory} from '../actions';
import StoryStar from './story-star.js';
import {Link} from 'react-router-dom';

export class Story extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetCurrentStory());
    }

    componentDidMount() {
        this.props.dispatch(fetchStory(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

    newCommentBlock() {
        if (this.props.currentUser.id && this.props.currentStory._id) {
            return (<NewComment />)
        }
        if (!this.props.currentUser.id && this.props.currentStory._id) {
            return (
                <div className="container col1">
                    <div className="inside-cont">
                        <h3>Post a new comment</h3>
                        <p>You must be <strong><Link to='/login'>logged in</Link></strong> to
                        post a new comment</p>
                    </div>
                </div>
            )
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
                    return (<span>No comment posted yet</span>)
                } else {
                    return (<span><i className="fa fa-comments" aria-hidden="true"></i> Comments ({nb})</span>)
                }
            }
            return (
                <div className="container col1">
                    <div className="inside-cont">
                        <h3>{countText(this.props.currentStory.comments.length)}</h3>
                    </div>
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

    displayStarStory() {
        if (this.props.currentUser.id
            && this.props.currentStory._id
            && this.props.currentStory.author._id !== this.props.currentUser.id) {
            return (<StoryStar />)
        }
        return ''
    }

    render() {
        return (
            <div>
                {this.storyConfirmDelete()}
                {this.story()}
                {this.storyAuthorOptions()}
                {this.displayStarStory()}
                {this.commentHeader()}
                {this.comments()}
                {this.newCommentBlock()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Story);
