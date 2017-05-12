import React from 'react';
import {connect} from 'react-redux';
import {starStory} from '../actions';
const _ = require('lodash');

export class StoryStar extends React.Component {
    render() {
        let action, className, text;
        if (_.indexOf(this.props.currentStory.stars, this.props.currentUser.id) > -1) {
            action = 'unstar';
            className = 'fa-star';
            text = 'You have starred this story';
        } else {
            action = 'star';
            className = 'fa-star-o';
            text = 'Star this story';
        }

        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>{text}</h4>
                    <i
                        onClick={(e) => this.props.dispatch(starStory(this.props.currentStory._id, action))}
                        className={"fa fa-3x " + className}
                        aria-hidden="true"
                    />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryStar);
