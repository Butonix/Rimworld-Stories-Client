import React from 'react';
import {connect} from 'react-redux';
import {ensureLogin} from '../actions';
import NewStoryForm from './new-story-form'

export class NewStory extends React.Component {

    componentDidMount() {
        this.props.dispatch(ensureLogin());
    }

    render() {
        const title = this.props.currentUser.currentDraft ? this.props.currentUser.currentDraft.title : '';
        const story = this.props.currentUser.currentDraft ? this.props.currentUser.currentDraft.story : '';
        return (
            <div>
                <NewStoryForm
                    draftTitle={title}
                    draftStory={story}
                    autoSave={this.props.autoSave}
                    autoSaveTime={this.props.autoSaveTime}
                />
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStory);
