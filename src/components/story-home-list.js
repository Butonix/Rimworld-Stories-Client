import React from 'react';
import {connect} from 'react-redux';
import StoryThumb from './story-thumb.js';
import {fetchUser, fetchLandingStories} from '../actions';
import {defaultScreenshot} from '../utils.js'

export class StoriesList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchLandingStories());
    }

    render() {
        const stories = this.props.landingList.list.map((story) => {
            if (story.status === 'published') {
                return (<StoryThumb
                        key={story._id}
                        id={story._id}
                        previewImage={story.screenshot || defaultScreenshot}
                        title={story.title}
                        shortText={story.story}
                        author={story.author.username}
                        posted={story.datePosted}
                        nbComments={story.comments.length}
                        avatarUrl={story.author.avatarUrl}
                     />)
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
