import React from 'react';
import {connect} from 'react-redux';
import NewStoryForm from './story-form-new';
import {getDraft, resetCurrentDraft, toggleAutoSave, saveDraft, saveDraftFieldsInState} from '../actions';
import UploadImage from './misc-upload-image.js';
import {defaultScreenshot, buttonContent, buttonDisableOnLoading} from '../utils';

export class NewStory extends React.Component {

    componentDidMount() {
        this.props.dispatch(getDraft(this.props.match.params.id));
        if (this.props.autoSave) {
            this.startAutoSaveTimer()
        }
    }

    componentWillUnmount() {
        clearInterval(this.autoSaveTimer);
        this.props.dispatch(resetCurrentDraft());
    }

    startAutoSaveTimer() {
        if (this.autoSaveTimer) {
            clearInterval(this.autoSaveTimer);
        }
        this.autoSaveTimer = setInterval(() => this.saveDraft(), this.props.autoSaveTime);
    }

    saveDraft() {
        if (this.props.currentDraft.status !== 'published') {
            this.props.dispatch(saveDraftFieldsInState(document.newstoryform.title.value, document.newstoryform.story.value));
            let data = new FormData();
            data.append('title', document.newstoryform.title.value);
            data.append('story', document.newstoryform.story.value);
            data.append('datePosted', this.props.currentDraft.datePosted);
            data.append('status', this.props.currentDraft.status);
            data.append('id', this.props.currentDraft._id);
            this.props.dispatch(saveDraft(data));
        }
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

    showStoryForm() {
        if (this.props.currentDraft._id) {
            const autoSaveToggleButtonText = this.props.autoSave ? 'Disable auto save' : 'Enable auto save';

            const draftOptions = this.props.currentDraft.status === 'draft' ?
                <div className="container col1">
                    <div
                        className={'button create-new-story ' + buttonDisableOnLoading(this.props.loading)}
                        onClick={ () => { if (!this.props.loading) {this.props.dispatch(getDraft('forceNew')); this.startAutoSaveTimer()} } }>
                        {buttonContent('New draft', this.props.loading)}
                    </div>
                    <div
                        className={'button save-draft ' + buttonDisableOnLoading(this.props.loading)}
                        onClick={ () => { if (!this.props.loading) {this.saveDraft()} } }>
                        {buttonContent('Save draft', this.props.loading)}
                    </div>
                    <div
                        className='button toggle-auto-save'
                        onClick={ () => { this.props.dispatch(toggleAutoSave());  this.toggleAS(); } }>
                        {autoSaveToggleButtonText}
                    </div>
                </div>
                : '';

            return (<div>
                <NewStoryForm
                    draftTitle={this.props.currentDraft.title}
                    draftStory={this.props.currentDraft.story}
                    autoSave={this.props.autoSave}
                    autoSaveTime={this.props.autoSaveTime}
                />
                <br />
                {draftOptions}
                <UploadImage image={this.props.currentDraft.screenshot || defaultScreenshot} folder='screenshots' />
                </div>
            )}
        return ''
    }

    render() {
        return (
            <div>
                {this.showStoryForm()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStory);
