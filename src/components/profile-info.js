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
                    <h2>{this.props.info.username}</h2>
                    <p><strong>{this.props.info.email}</strong></p>
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
