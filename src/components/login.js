import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';
import {fetchUser} from '../actions';

export class Profile extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container col1">
                <a href={API_URL + '/auth/facebook'}>Log in with FB</a>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Profile);
