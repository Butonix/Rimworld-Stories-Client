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
                    <h2>Write a Story</h2>
                    <form key={this.props.currentDraft._id} name="newstoryform" onSubmit={(e) => {if (!this.props.loading) {this.submitStory(e)}}}>
                        <p>
                            <input className="form-element title-input" autoComplete='off' type="text" id="title" defaultValue={this.props.draftTitle} placeholder="Title" />
                        </p>

                        <p>
                            <textarea className='form-element story-textarea' id="story" defaultValue={this.props.draftStory} placeholder="Type your story here..." />
                        </p>

                        <p>
                            <button type="submit" className={'submit button ' + buttonDisableOnLoading(this.props.loading)}>
                                {buttonContent('Publish', this.props.loading)}
                            </button>
                        </p>
                    </form>
                </div>
        );
    }
}

export const mapStateToProps = (state) => (state.app);
export default connect(mapStateToProps)(NewStoryForm);
