import React from 'react';
import {connect} from 'react-redux';
import {setMessage, tickDownTimer} from '../actions';

export class Alert extends React.Component {

    componentDidMount() {
        this.time = Number(this.props.timer);
        this.innerTimer = setInterval(() => { this.innerTimerTick() }, 1000);
    }

    innerTimerTick() {
        this.props.dispatch(tickDownTimer());
        if (this.props.alert.timer < 0 || !this.props.alert.message) {
            this.props.dispatch(setMessage(null, null));
            clearInterval(this.innerTimer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.innerTimer);
    }

    render() {
        return (
          	<div className={'alert-container ' + this.props.alert.type}>
                {this.props.alert.timer} {this.props.alert.message}
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Alert);
