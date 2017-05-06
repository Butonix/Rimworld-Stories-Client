import React from 'react';
import {connect} from 'react-redux';
import StoryPreview from './story-preview.js';
import {fetchUser} from '../actions';

export class StoriesList extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchUser());
    }

    stories = this.props.previewStories.map((story) => {
        return (<StoryPreview
                key={story.id}
                id={story.id}
                previewImage={story.previewImage}
                title={story.title}
                shortText={story.shortText}
                author={story.author}
                posted={story.posted}
                nbComments={story.nbComments}
             />)
    });

    render() {
        return (
        	<div className="listStories">
                {this.stories}
        	</div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoriesList);
