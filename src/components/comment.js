import React from 'react';
import {connect} from 'react-redux';
import CommentOptions from './comment-options';
import CommentAuthor from './comment-author.js';
import {displayDate} from '../utils.js';
import {Link} from 'react-router-dom';

export class Comment extends React.Component {

    commentOptions() {
        if (this.props.comm.author._id === this.props.currentUser.id) {
            return (<CommentOptions id={this.props.comm._id} />)
        }
        return ''

    }

    render () {
        return (
            <div className="container col1">
                <div className="inside-cont comment">
                    <CommentAuthor
                        id={this.props.comm.author._id}
                        avatar={this.props.comm.author.avatarUrl}
                    />
                    <div className="comment-top-bar">
                        <Link to={'/profile/' + this.props.comm.author._id}><span className="author left fake-link">{this.props.comm.author.username}</span></Link>
                        <span className="date right">{displayDate(this.props.comm.datePosted)}</span>
                    </div>
                    <div className="comment-right-box">
                        {this.props.comm.comment}
                    </div>
                    <div className="comment-options">
                        {this.commentOptions()}
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Comment);
