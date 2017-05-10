import React from 'react';
import {connect} from 'react-redux';
import StoryThumb from './story-thumb.js';
import {fetchUser, fetchLandingStories} from '../actions';

export class StoriesList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchLandingStories());
    }

    render() {
        const stories = this.props.landingList.list.map((story) => {
            if (story.status === 'published') {
                return (<StoryThumb story={story} key={story._id} />)
             }
             return null
        });
        return (
        	<div className="listStories">
                {stories}
        	</div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoriesList);
