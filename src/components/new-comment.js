import React from 'react';
import {connect} from 'react-redux';

export class NewComment extends React.Component {
    render() {
        return (
            <div className="container col1">
                <form className="inside-cont">
                    <h3>Post a new comment</h3>
                    <label>Title
                        <input type="text"></input>
                    </label>
                    <br />
                    <label>Comment
                        <textarea></textarea>
                    </label>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(NewComment);
