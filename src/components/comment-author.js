import React from 'react';
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

export default CommentAuthor;
