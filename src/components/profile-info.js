import React from 'react';
import {connect} from 'react-redux';

export class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>User info</h4>
                    <p>User name: {this.props.info.username}</p>
                    <p>Email: {this.props.info.email}</p>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(ProfileInfo);
