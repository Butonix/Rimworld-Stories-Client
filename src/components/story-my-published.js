import React from 'react';
import {connect} from 'react-redux';

export class MyPublishedStores extends React.Component {
    render() {
        const stories = this.props.stories.map((story) => {
            if (story.status === 'published') {
                return (<div key={story._id} className="list-item">
                    {story._id}
                    </div>
                )
             }
             return ''
        });
        return (
            <div className="container col1">
                <div className="inside-cont">
                    Published stories
                    {stories}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(MyPublishedStores);
