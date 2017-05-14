import React from 'react';
import {connect} from 'react-redux';
import StoryThumb from './story-thumb.js';
import StoryNoneFound from './story-none-found.js';
import {fetchUser, fetchLandingStories, resetStoryLandingList} from '../actions';
import Filters from './misc-filters';
import Loader from './misc-loader';

export class StoriesList extends React.Component {
    componentWillMount() {
        this.props.dispatch(resetStoryLandingList());
    }

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchLandingStories({
            type: this.props.filters.type,
            perPage: this.props.filters.perPage,
            page: this.props.filters.page -1,
        }));
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

    loader() {
        if (this.props.landingList.list[0] !== 'none' && this.props.landingList.list.length > 0) {
            return (<Loader />)
        }
        return ''
    }

    render() {
        return (
        	<div className="listStories">
                <Filters />
                {this.listStories()}
                {this.loader()}
        	</div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoriesList);
