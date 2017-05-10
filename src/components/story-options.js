import React from 'react';
import {connect} from 'react-redux';
import {buttonContent, buttonDisableOnLoading} from '../utils';
import {toggleConfirmDeleteStory} from '../actions';
import {Link} from 'react-router-dom';

export class StoryOptions extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <div onClick={() => this.props.dispatch(toggleConfirmDeleteStory())} className={'button ' + buttonDisableOnLoading(this.props.loading)}>
                        {buttonContent('Delete', this.props.loading)}
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
