import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {displayDate} from '../utils.js';

export class MyPublishedStores extends React.Component {

    returnStories() {
        let stories = [];
        this.props.stories.forEach((story) => {
            if (story.status === 'published') {
                stories.push(
                    <Link to={'/story/' + story._id} key={story._id} className="fake-link">
                        <div className="list-item">
                            <div className='story-list-title'>{story.title || 'No title'}</div>
                            <div className='list-stories-date'>{displayDate(story.datePosted)}</div>
                        </div>
                    </Link>
                )
            } else {
                return false
            }
        });
        if (stories.length === 0) {
            return (<p>No story published</p>)
        }
        return (<div className='list-stories-profile'>{stories}</div>)
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>Published stories</h4>
                    {this.returnStories()}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(MyPublishedStores);
