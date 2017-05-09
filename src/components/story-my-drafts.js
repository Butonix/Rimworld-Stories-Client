import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class MyDrafts extends React.Component {

    render() {
        const stories = this.props.stories.map((story) => {
            if (story.status === 'draft') {
                return (<div key={story._id} className="list-item">
                    <Link to={'/write-story/' + story._id}><span className="fake-link">{story.title || story._id}</span></Link>
                    </div>
                )
             }
             return ''
        });
        return (
            <div className="container col1">
                <div className="inside-cont">
                    My drafts
                    {stories}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(MyDrafts);
