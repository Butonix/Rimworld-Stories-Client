import React from 'react';
import {connect} from 'react-redux';
import StoryThumb from './story-thumb.js';
import StoryNoneFound from './story-none-found.js';
import {fetchUser, fetchLandingStories, resetStoryLandingList} from '../actions';

export class StoriesList extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetStoryLandingList());
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchLandingStories());
    }

    listStories() {
        if (this.props.landingList.list[0] !== 'none') {
            const stories = this.props.landingList.list.map((story) => {
                return (<StoryThumb story={story} key={story._id} />)
            });
            return stories
        }
        return (<StoryNoneFound />)
    }

    render() {
        return (
        	<div className="listStories">
                {this.listStories()}
        	</div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoriesList);
