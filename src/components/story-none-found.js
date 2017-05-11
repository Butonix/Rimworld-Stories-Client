import React from 'react';
import {connect} from 'react-redux';

export class StoryNoneFound extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">No story found :(</h2>
    			</div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryNoneFound);
