import React from 'react';
import {connect} from 'react-redux';

export class Comment extends React.Component {
    render() {
        return (
            <div className="loading-container">
                <img src={require('../images/loading.gif')} alt="loading" width="20px" />
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Comment);
