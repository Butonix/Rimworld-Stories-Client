import React from 'react';
import {connect} from 'react-redux';
import StoryAuthorInfo from './story-author-info.js';
import StoryCommentOptions from './story-comment-options';

export class Comment extends React.Component {

    commentOptions() {
        if (this.props.comm.author._id === this.props.currentUser.id) {
            return (<StoryCommentOptions id={this.props.comm._id} />)
        }
        return ''

    }

    render () {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <p>
                        {this.props.comm.comment}<br/>
                        {this.props.comm._id}
                    </p>
                    <StoryAuthorInfo
                        author={this.props.comm.author}
                        datePosted={this.props.comm.datePosted}
                    />
                    {this.commentOptions()}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Comment);
