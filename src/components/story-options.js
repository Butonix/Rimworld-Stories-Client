import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading, setupModalBox} from '../utils';
import {Link} from 'react-router-dom';
import StoryConfirmDelete from './story-confirm-delete.js';

export class StoryOptions extends React.Component {
    componentDidMount() {
        setupModalBox();
    }

    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">

                    <button className={'button ' + buttonDisableOnLoading(this.props.loading)} id="myBtn">Delete</button>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <StoryConfirmDelete />
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
