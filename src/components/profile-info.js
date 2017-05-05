import React from 'react';
import {connect} from 'react-redux';

export class ProfileInfo extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    User name: {this.props.info.userName} <br />
                    Email: {this.props.info.email} <br />
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(ProfileInfo);
