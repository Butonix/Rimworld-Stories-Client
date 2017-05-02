import React from 'react';
import {connect} from 'react-redux';

export class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="container col1">
                User name: {this.props.info.username} <br />
                Email: {this.props.info.email} <br />
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(ProfileInfo);
