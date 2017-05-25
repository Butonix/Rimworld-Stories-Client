import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading} from '../utils';
import {postNewComment} from '../actions';

export class NewComment extends React.Component {

    submitNewComment(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('comment', e.target.content.value);
        data.append('story', this.props.currentStory._id);
        data.append('storyAuthor', this.props.currentStory.author._id);
        this.props.dispatch(postNewComment(data));
        e.target.content.value = '';
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <form onSubmit={(e) => {if (!this.props.loading) {this.submitNewComment(e)}}}>
                        <h4>Post a new comment</h4>
                        <textarea name="content" className="new-comment-textarea form-element" placeholder="Post a comment..."></textarea>
                        <p>
                            <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                {buttonContent('Submit', this.props.loading)}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewComment);
