import React from 'react';
import {connect} from 'react-redux';
import NewComment from './story-new-comment.js';
import Comment from './story-comment.js';
import {resetCurrentStory, fetchUser, fetchStory} from '../actions';
import {defaultScreenshot} from '../utils.js'

export class Story extends React.Component {

    componentWillMount() {
        this.props.dispatch(resetCurrentStory());
    }

    componentDidMount() {
        this.props.dispatch(fetchStory(this.props.match.params.id));
        this.props.dispatch(fetchUser());
    }

    story() {
        if (this.props.currentStory._id) {
            return (
                <div className="container col1">
        			<div className="story-preview inside-cont">
                        <h2 className="story-preview-title">{this.props.currentStory.title}</h2>
                        <div><img className='story-screenshot' alt='' src={this.props.currentStory.screenshot || defaultScreenshot} /></div>
        			</div>
                    <h3>COMMENTS</h3>
                    <NewComment />
                    <Comment user="Nick" comment="blahblahablah" />
                    <Comment user="Roger" comment="It's cool" />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.story()}
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Story);
