import React from 'react';
import {connect} from 'react-redux';
import {ensureLogin} from '../actions';
import NewStoryForm from './story-form-new'

export class NewStory extends React.Component {

    componentDidMount() {
        this.props.dispatch(ensureLogin());
    }

    render() {
        return (
            <div>
                <NewStoryForm
                    draftTitle={this.props.currentDraft.title }
                    draftStory={this.props.currentDraft.story}
                    autoSave={this.props.autoSave}
                    autoSaveTime={this.props.autoSaveTime}
                />
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStory);
