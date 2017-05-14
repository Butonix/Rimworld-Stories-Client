import React from 'react';
import {connect} from 'react-redux';
import {fetchLandingStories} from '../actions';

export class Filters extends React.Component {

    filterBgMostRecent() {
        if (this.props.filters.type === 'Most recent') {
            return 'active'
        }
        return ''
    }

    filterBgMostViewed() {
        if (this.props.filters.type === 'Most viewed') {
            return 'active'
        }
        return ''
    }

    filterBgMostStarred() {
        if (this.props.filters.type === 'Most starred') {
            return 'active'
        }
        return ''
    }

    requestObject(string) {
        return {
            type: string,
            perPage: this.props.filters.perPage,
            page: 0,
        }
    }

    render() {
        return (
            <div className="container col1">
    			<div className="inside-cont filters-cont">
                    <div className={"filter " + this.filterBgMostRecent()} onClick={(e) => this.props.dispatch(fetchLandingStories(this.requestObject('Most recent')))}>
                        Most recent
                    </div>
                    <div className={"filter " + this.filterBgMostViewed()} onClick={(e) => this.props.dispatch(fetchLandingStories(this.requestObject('Most viewed')))}>
                        Most viewed
                    </div>
                    <div className={"filter " + this.filterBgMostStarred()} onClick={(e) => this.props.dispatch(fetchLandingStories(this.requestObject('Most starred')))}>
                        Most starred
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Filters);
