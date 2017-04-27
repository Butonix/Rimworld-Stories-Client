import React from 'react';
import {connect} from 'react-redux';

export class Story extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">Story ID : {this.props.match.params.id}</h2>
                <a href="/">Back</a>
    			</div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Story);
