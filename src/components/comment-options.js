import React from 'react';
import {connect} from 'react-redux';
import {buttonDisableOnLoading, setupModalBox, buttonContent} from '../utils';
import CommentConfirmDelete from './comment-confirm-delete.js';

export class CommentOptions extends React.Component {
    componentDidMount() {
        setupModalBox(this.props.id);
    }

    render () {
        return (
            <div>
                <button className={'delete button ' + buttonDisableOnLoading(this.props.loading)} id={"myBtn" + this.props.id}>
                    {buttonContent('Delete', this.props.loading)}
                </button>
                <div id={"myModal" + this.props.id} className={"modal modal" + this.props.id}>
                    <div className={"modal-content modal-content" + this.props.id}>
                        <CommentConfirmDelete id={this.props.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(CommentOptions);
