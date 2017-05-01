import React from 'react';
import {connect} from 'react-redux';
import {resetMessage} from '../actions';

export class Alert extends React.Component {

    componentDidMount() {
        this.time = this.props.alert.timer;
        this.innerTimer = setInterval(() => { this.innerTimerTick() }, 1000);
    }

    innerTimerTick() {
        this.time--;
        if (this.time < 0) {
            this.props.dispatch(resetMessage());
            clearInterval(this.innerTimer);
        }
    }

    render() {
        return (
          	<div className={'alert-container ' + this.props.alert.type}>
                {this.props.alert.message}
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Alert);
