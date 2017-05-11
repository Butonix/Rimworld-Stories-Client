import React from 'react';
import {connect} from 'react-redux';
import {buttonDisableOnLoading, setupModalBox} from '../utils';
import StoryCommentConfirmDelete from './story-comment-confirm-delete.js';

export class CommentOptions extends React.Component {
    componentDidMount() {
        setupModalBox(this.props.id);
    }

    render () {
        return (
            <div>
            <button className={'button ' + buttonDisableOnLoading(this.props.loading)} id={"myBtn" + this.props.id}>Delete</button>
            <div id={"myModal" + this.props.id} className={"modal modal" + this.props.id}>
                <div className={"modal-content modal-content" + this.props.id}>
                    <StoryCommentConfirmDelete id={this.props.id} />
                </div>
            </div></div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(CommentOptions);
