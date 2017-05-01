import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';

export class Burger extends React.Component {
    render() {
        return (
            <div className="burger">
                  <div className="burger-menu">
                        <a href="/"><div className="burger-button">Home</div></a>
                        <a href="/profile"><div className="burger-button">Profile</div></a>
                        <a href="/new-story"><div className="burger-button">New Story</div></a>
                        <a href="/login"><div className="burger-button">Log in</div></a>
                        <a href={API_URL + '/auth/logout'}><div className="burger-button">Log out</div></a>
                  </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Burger);
