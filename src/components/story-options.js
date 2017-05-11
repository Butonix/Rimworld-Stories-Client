import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading, setupModalBox} from '../utils';
import {Link} from 'react-router-dom';
import StoryConfirmDelete from './story-confirm-delete.js';

export class StoryOptions extends React.Component {
    componentDidMount() {
        setupModalBox(this.props.currentStory._id);
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">

                    <button className={'button ' + buttonDisableOnLoading(this.props.loading)} id={"myBtn" + this.props.currentStory._id}>
                        {buttonContent('Delete', this.props.loading)}
                    </button>
                    <div id={"myModal" + this.props.currentStory._id} className={"modal modal" + this.props.currentStory._id}>
                        <div className={"modal-content modal-content" + this.props.currentStory._id}>
                            <StoryConfirmDelete id={this.props.currentStory._id} />
                        </div>
                    </div>

                    <Link to={'/write-story/' + this.props.currentStory._id}><div className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                        {buttonContent('Edit', this.props.loading)}
                    </div></Link>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryOptions);
