import React from 'react';
import {connect} from 'react-redux';
import {fetchLandingStories} from '../actions';

export class Filters extends React.Component {

    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                    <div className="fake-link filter" onClick={(e) => this.props.dispatch(fetchLandingStories({type: 'Most recent'}))}>
                        Most recent
                    </div>
                    <div className="fake-link filter" onClick={(e) => this.props.dispatch(fetchLandingStories({type: 'Most viewed'}))}>
                        Most viewed
                    </div>
                    <div className="fake-link filter" onClick={(e) => this.props.dispatch(fetchLandingStories({type: 'Most starred'}))}>
                        Most starred
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Filters);
