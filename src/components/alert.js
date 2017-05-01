import React from 'react';
import {connect} from 'react-redux';

export class Alert extends React.Component {
    render() {
        return (
          	<div className="alert-container">
                {this.props.alertMessage}
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Alert);
