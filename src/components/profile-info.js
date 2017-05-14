import React from 'react';
import {connect} from 'react-redux';
import {buttonDisableOnLoading, buttonContent} from '../utils';
import {logOut} from '../actions';

export class ProfileInfo extends React.Component {

    logOut() {
        if (!this.props.loading) {
            this.props.dispatch(logOut())
        }
    }
    
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    <h4>User info</h4>
                    <p>User name: {this.props.info.username}</p>
                    <p>Email: {this.props.info.email}</p>
                    <div className={'button ' + buttonDisableOnLoading(this.props.loading)} onClick={e => this.logOut()}>
                        {buttonContent('Log out', this.props.loading)}
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(ProfileInfo);
