import React from 'react';
import {connect} from 'react-redux';
import {updateStory} from '../actions';
import {buttonDisableOnLoading, buttonContent} from '../utils';

export class NewStoryForm extends React.Component {

    submitStory(e) {
        clearInterval(this.autoSaveTimer);
        e.preventDefault();
        let data = new FormData();
        data.append('title', e.target.title.value);
        data.append('story', e.target.story.value);
        data.append('id', this.props.currentDraft._id);
        data.append('status', this.props.currentDraft.status);
        data.append('datePosted', this.props.currentDraft.datePosted);
        this.props.dispatch(updateStory(data));
    }

    render() {
        return (<div>
                <div className="container col1">
                    <h3>Write a Story</h3>
                </div>
                    <form key={this.props.currentDraft._id} name="newstoryform" onSubmit={(e) => {if (!this.props.loading) {this.submitStory(e)}}}>
                        <div className="container col1">
                            <input className="form-element title-input" autoComplete='off' type="text" id="title" defaultValue={this.props.draftTitle} placeholder="Title" />
                        </div>
                        <div className="container col1">
                            <textarea className='form-element story-textarea' id="story" defaultValue={this.props.draftStory} placeholder="Type your story here..." />
                        </div>
                        <div className="container col1">
                            <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                {buttonContent('Publish', this.props.loading)}
                            </button>
                        </div>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStoryForm);
