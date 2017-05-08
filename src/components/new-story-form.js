import React from 'react';
import {connect} from 'react-redux';
import {ensureLogin, submitNewStory, updateStory, saveDraft, toggleAutoSave, clearCurrentDraft, saveDraftFieldsInState} from '../actions';

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
        this.props.dispatch(saveDraftFieldsInState(document.newstoryform.title.value, document.newstoryform.story.value));
        let data = new FormData();
        data.append('title', document.newstoryform.title.value);
        data.append('story', document.newstoryform.story.value);
        data.append('status', 'draft');
        if (this.props.currentDraft._id) {
            data.append('id', this.props.currentDraft._id);
        } else {
            data.append('id', null);
        }
        this.props.dispatch(saveDraft(data));
    }

    submitStory(e) {
        clearInterval(this.autoSaveTimer);
        this.props.dispatch(clearCurrentDraft());
        e.preventDefault();
        let data = new FormData();
        data.append('title', e.target.title.value);
        data.append('story', e.target.story.value);
        if (this.props.currentDraft._id) {
            console.log('updating')
            data.append('id', this.props.currentDraft._id);
            data.append('status', 'published');
            this.props.dispatch(updateStory(data));
        } else {
            console.log('submitting new')
            this.props.dispatch(submitNewStory(data));
        }
    }

    render() {
        const autoSaveToggleButtonText = this.props.autoSave ? 'Disable auto save' : 'Enable auto save';
        const createNewButton = !this.props.currentDraft._id ? '' : <div className='button create-new-story' onClick={ () => { this.props.dispatch(clearCurrentDraft()); this.clearForm() } }>Create New</div>;
        return (
            <div className="container col1">
            <h3>New Story</h3>
                <form name="newstoryform" onSubmit={e => this.submitStory(e)}>

                    <div key={this.props.draftTitle + '-title'}>
                        <input className="form-element title-input" required='true' autoComplete='off' type="text" id="title" defaultValue={this.props.draftTitle} placeholder="Title" />
                    </div>
                    <br />

                    <div key={this.props.draftTitle + '-story'}>
                        <textarea className='form-element story-textarea' required='true' id="story" defaultValue={this.props.draftStory} placeholder="Type your story here..." />
                    </div>

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
