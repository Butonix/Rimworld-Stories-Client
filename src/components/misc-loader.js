import React from 'react';
import {connect} from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import {fetchLandingStories} from '../actions';

export class Loader extends React.Component {

    componentDidMount() {
    }

    onChange(isVisible) {
        if (isVisible && !this.props.loading && (this.props.filters.perPage * this.props.filters.page) < this.props.filters.total) {
            console.log('requesting')
            this.props.dispatch(fetchLandingStories(this.props.filters));
        }
    };

    render() {
        return (<VisibilitySensor onChange={this.onChange.bind(this)} />);
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Loader);
