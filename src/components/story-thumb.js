import React from 'react';
import {connect} from 'react-redux';
import {displayDate} from '../utils.js';
import {Link} from 'react-router-dom';

export class StoryThumb extends React.Component {
    render() {
        return (
            <div className="container col1">
    			<div className="story-preview inside-cont">
                <h2 className="story-preview-title">{this.props.title}</h2>
                    <div className="story-thumbnail-container">
                        <Link to={'/story/' + this.props.id}>
                            <img className="story-thumbnail" src={this.props.previewImage} alt="Thumbnail" width="100%" />
                        </Link>
                    </div>
                    <p className="story-preview">{this.props.shortText}</p>
                    <div className="story-preview-info">
                        <img alt='' src={this.props.avatarUrl} className='profile-avatar small-thumb'/>
                        <span className="info-separator"> </span>
                        {this.props.author}
                        <span className="info-separator"> | </span>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="info-separator"> </span>
                        {displayDate(this.props.posted)}
                        <span className="info-separator"> | </span>
                        {this.props.nbComments} comments
                    </div>
    			</div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(StoryThumb);
