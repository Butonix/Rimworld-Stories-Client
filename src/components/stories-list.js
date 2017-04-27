import React from 'react';
import {connect} from 'react-redux';
import StoryPreview from './story-preview.js';

export class StoriesList extends React.Component {
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

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(StoriesList);
