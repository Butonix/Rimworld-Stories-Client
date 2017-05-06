import React from 'react';
import {connect} from 'react-redux';
import {ensureLogin, submitNewStory} from '../actions';

export class NewStory extends React.Component {

    componentDidMount() {
        this.props.dispatch(ensureLogin());
    }

    submitEvent(e) {
        e.preventDefault();
        console.log(e.target)
        if (e.target.newUsername.value) {
            this.props.dispatch(submitNewStory(e.target.newUsername.value));
        }
    }

    render() {
        return (
            <div className="container col1">
                <form onSubmit={e => this.submitEvent(e)}>

                    <label>Title
                        <input type="text" id="title"></input>
                    </label>

                    <br />

                    <label>Story
                        <textarea id="content"></textarea>
                    </label>

                    <br />

                    <button type="submit" className="button">Submit</button>
                    
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStory);
