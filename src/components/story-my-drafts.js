import React from 'react';
import {connect} from 'react-redux';
import {setStoryToLatestDraft} from '../actions';

export class MyDrafts extends React.Component {

    render() {
        const stories = this.props.stories.map((story) => {
            if (story.status === 'draft') {
                return (<div key={story._id} className="list-item">
                    <span className="fake-link" onClick={() => this.props.dispatch(setStoryToLatestDraft(story._id))} >{story.title || story._id}</span>
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
