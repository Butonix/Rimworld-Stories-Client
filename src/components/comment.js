import React from 'react';
import {connect} from 'react-redux';

export class Comment extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    User: {this.props.user}<br />
                    Comment: {this.props.comment}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Comment);
