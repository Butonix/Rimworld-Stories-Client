import React from 'react';
import {connect} from 'react-redux';

export class MyDrafts extends React.Component {
    render() {
        const stories = this.props.stories.map((story) => {
            if (story.status === 'draft') {
                return (<div key={story._id}>
                    {story._id}
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
