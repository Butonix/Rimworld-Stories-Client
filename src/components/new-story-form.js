import React from 'react';
import {connect} from 'react-redux';
import {ensureLogin, submitNewStory, updateStory, saveDraft, toggleAutoSave, clearCurrentDraft, resetCurrentlyEdited} from '../actions';

export class NewStoryForm extends React.Component {

    componentDidMount() {
        this.props.dispatch(ensureLogin());
        if (this.props.autoSave) {
            this.startAutoSaveTimer()
        }
    }

    componentWillUnmount() {
        clearInterval(this.autoSaveTimer);
    }

    startAutoSaveTimer() {
        if (this.autoSaveTimer) {
            clearInterval(this.autoSaveTimer);
        }
        this.autoSaveTimer = setInterval(() => this.saveDraft(), this.props.autoSaveTime);
    }

    toggleAS() {
        if (this.props.autoSave) {
            clearInterval(this.autoSaveTimer);
        } else {
            this.startAutoSaveTimer()
        }
    }

    clearForm() {
        document.newstoryform.reset()
    }

    saveDraft() {
        console.log(document.newstoryform.title.value)
        let data = new FormData();
        data.append('title', document.newstoryform.title.value);
        data.append('story', document.newstoryform.story.value);
        data.append('status', 'draft');
        if (this.props.storyCurrentlyEdited) {
            data.append('id', this.props.storyCurrentlyEdited);
        } else if (this.props.currentUser.currentDraft) {
            data.append('id', this.props.currentUser.currentDraft._id);
        } else {
            data.append('id', null);
        }
        this.props.dispatch(saveDraft(data));
    }

    submitStory(e) {
        clearInterval(this.autoSaveTimer);
        this.props.dispatch(resetCurrentlyEdited());
        e.preventDefault();
        let data = new FormData();
        data.append('title', e.target.title.value);
        data.append('story', e.target.story.value);
        if (this.props.currentUser.currentDraft || this.props.storyCurrentlyEdited) {
            console.log('updating')
            if (this.props.storyCurrentlyEdited) {
                data.append('id', this.props.storyCurrentlyEdited);
            } else if (this.props.currentUser.currentDraft) {
                data.append('id', this.props.currentUser.currentDraft._id);
            }
            data.append('status', 'published');
            this.props.dispatch(updateStory(data));
        } else {
            console.log('submitting new')
            this.props.dispatch(submitNewStory(data));
        }
    }

    render() {
        const autoSaveToggleButtonText = this.props.autoSave ? 'Disable auto save' : 'Enable auto save';
        const createNewButton = this.props.currentDraft ? '' : <div className='button create-new-story' onClick={ () => { this.props.dispatch(clearCurrentDraft()); this.clearForm() } }>Create New</div>;
        return (
            <div className="container col1">
                <form name="newstoryform" onSubmit={e => this.submitStory(e)}>

                    <label key={this.props.draftTitle + '-title'}>Title
                        <input required='true' autoComplete='off' type="text" id="title" defaultValue={this.props.draftTitle} />
                    </label>
                    <br />
                    <br />

                    <label key={this.props.draftTitle + '-story'}>Story
                        <textarea required='true' id="story" defaultValue={this.props.draftStory} />
                    </label>

                    <br />
                    <br />

                    <button type="submit" className="button">Submit</button>

                </form>
                <br />
                <div className='button toggle-auto-save' onClick={ () => { this.props.dispatch(toggleAutoSave());  this.toggleAS() } }>{autoSaveToggleButtonText}</div>
                <br />
                <br />
                {createNewButton}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStoryForm);
