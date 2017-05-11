import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class MyDrafts extends React.Component {

    render() {
        let stories = this.props.stories.map((story) => {
            if (story.status === 'draft') {
                return (<div key={story._id} className="list-item">
                    <Link to={'/write-story/' + story._id} className="fake-link"><span>{story.title || story._id}</span></Link>
                    </div>
                )
             }
             return ''
        });
        if (stories.length === 0) {
            stories = 'No draft currently saved'
        }
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>My drafts</h4>
                    {stories}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(MyDrafts);
