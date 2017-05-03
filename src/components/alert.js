import React from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions';

export class Alert extends React.Component {

    componentDidMount() {
        console.log(this.props.timer)
        this.time = Number(this.props.timer);
        this.innerTimer = setInterval(() => { this.innerTimerTick() }, 1000);
    }

    innerTimerTick() {
        console.log(this.props.alert)
        this.time--;
        if (this.time < 0 || !this.props.alert.message) {
            this.props.dispatch(setMessage(null, null));
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
