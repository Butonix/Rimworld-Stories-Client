import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class MyPublishedStores extends React.Component {
    render() {
        const stories = this.props.stories.map((story) => {
            if (story.status === 'published') {
                return (<div key={story._id} className="list-item">
                    <Link to={'/story/' + story._id} className="fake-link">{story.title}</Link>
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
