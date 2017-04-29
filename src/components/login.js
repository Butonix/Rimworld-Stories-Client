import React from 'react';
import {connect} from 'react-redux';

export class Profile extends React.Component {
    render() {
        return (
            <div className="container col1">
                <a href="/">Log in with FB</a>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Profile);
