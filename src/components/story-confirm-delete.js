import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading} from '../utils';
import {deleteStory} from '../actions';

export class StoryConfirmDelete extends React.Component {
    render() {
        return (
            <div className="inside-cont col1 confirm-delete">
                <p><strong>Are you sure?</strong></p>
                <p>Story deletion is permanent.</p>
                <div className={'button close' + this.props.id + ' ' + buttonDisableOnLoading(this.props.loading)}>
                    {buttonContent('Cancel', this.props.loading)}
                </div>
                <div onClick={() => { if (!this.props.loading) {this.props.dispatch(deleteStory(this.props.currentStory._id))} }}
                    className={'delete button ' + buttonDisableOnLoading(this.props.loading)}>
                    {buttonContent('Delete', this.props.loading)}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryConfirmDelete);
