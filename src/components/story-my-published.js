import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class MyPublishedStores extends React.Component {
    render() {
        let stories = this.props.stories.map((story) => {
            if (story.status === 'published') {
                return (<div key={story._id} className="list-item">
                    <Link to={'/story/' + story._id} className="fake-link">{story.title}</Link>
                    </div>
                )
             }
             return ''
        });
        if (stories.length === 0) {
            stories = 'No stories published'
        }
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>Published stories</h4>
                    {stories}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(MyPublishedStores);
