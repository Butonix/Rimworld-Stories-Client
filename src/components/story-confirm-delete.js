import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading} from '../utils';
import {toggleConfirmDeleteStory, deleteStory} from '../actions';

export class StoryConfirmDelete extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    Are you sure? Story deletion is permanent.<br/>
                    <div onClick={() => this.props.dispatch(toggleConfirmDeleteStory())} className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                        {buttonContent('Cancel', this.props.loading)}
                    </div>
                    <div onClick={() => { if (!this.props.loading) {this.props.dispatch(deleteStory(this.props.currentStory._id))} }} className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                        {buttonContent('Delete', this.props.loading)}
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryConfirmDelete);
