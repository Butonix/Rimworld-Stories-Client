import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';

export class Burger extends React.Component {
    render() {

        const links = this.props.currentUser.id ?
        <div>
            <a href="/"><div className="burger-button">Home</div></a>
            <a href={'/profile/' + this.props.currentUser.id}><div className="burger-button">Profile</div></a>
            <a href="/new-story"><div className="burger-button">New Story</div></a>
            <a href={API_URL + '/auth/logout'}><div className="burger-button">Log out</div></a>
        </div>
        :
        <div>
            <a href="/"><div className="burger-button">Home</div></a>
            <a href="/login"><div className="burger-button">Log in</div></a>
        </div>
        ;

        return (
            <div className="burger">
                  <div className="burger-menu">
                        {links}
                  </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Burger);
