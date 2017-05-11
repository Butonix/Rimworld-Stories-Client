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
        this.props.dispatch(postNewComment(data));
    }

    render() {
        return (
            <div className="container col1">
                <form className="inside-cont" onSubmit={(e) => {if (!this.props.loading) {this.submitNewComment(e)}}}>
                    <h3>Post a new comment</h3>
                    <textarea name="content" className="new-comment-textarea" placeholder="Post a comment"></textarea>
                    <button type="submit" className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                        {buttonContent('Submit', this.props.loading)}
                    </button>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewComment);
