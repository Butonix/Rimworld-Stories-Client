import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function CommentAuthor(props) {
    return (
        <Link to={'/profile/' + props.id}>
            <div className="comment-author">
                <p>
                    <img alt='' src={props.avatar} className='profile-avatar comment' />
                </p>
            </div>
        </Link>
    );
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(CommentAuthor);
