import React from 'react';
import {connect} from 'react-redux';
import StoryPreview from './story-preview.js';

export class StoriesList extends React.Component {

    mockData1 = {
        previewImage: require('../images/story.jpg'),
        title: 'How my colony got wiped out',
        shortText: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
        author: 'Johnny',
        posted: '2 hours ago',
        nbComments: 3
    }

    render() {
        return (
        	<main>
                <StoryPreview
                    previewImage={this.mockData1.previewImage}
                    title={this.mockData1.title}
                    shortText={this.mockData1.shortText}
                    author={this.mockData1.author}
                    posted={this.mockData1.posted}
                    nbComments={this.mockData1.nbComments}
                 />
        	</main>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(StoriesList);
