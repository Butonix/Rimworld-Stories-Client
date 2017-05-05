import React from 'react';
import {connect} from 'react-redux';

export class NewStory extends React.Component {
    render() {
        return (
            <div className="container col1">
                <form>
                    <label>Title
                        <input type="text"></input>
                    </label>
                    <br />
                    <label>Story
                        <textarea></textarea>
                    </label>
                </form>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(NewStory);
