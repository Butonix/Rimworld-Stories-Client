import React from 'react';
import {connect} from 'react-redux';

export class NewComment extends React.Component {
    render() {
        return (
            <div className="container col1">
                <form className="inside-cont">
                    <h3>Post a new comment</h3>
                    <br />
                        <textarea placeholder="Post a comment"></textarea>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewComment);
