import React from 'react';
import {connect} from 'react-redux';

export class ProfileStoriesList extends React.Component {
    render() {
        return (
            <div className="container col1">
                <div className="inside-cont">
                    Stories list
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(ProfileStoriesList);
