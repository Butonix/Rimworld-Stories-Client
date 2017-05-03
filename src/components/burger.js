import React from 'react';
import {connect} from 'react-redux';
import {API_URL} from '../config.js';
import {Link} from 'react-router-dom';
import {toggleBurger, setMessage} from '../actions';

export class Burger extends React.Component {
    render() {
        const links = this.props.currentUser.id ?
        <div>
            <Link to="/"><div className="burger-button">Home</div></Link>
            <Link to={'/profile/' + this.props.currentUser.id} ><div className="burger-button">Profile</div></Link>
            <Link to="/new-story"><div className="burger-button">New Story</div></Link>
            <Link to={API_URL + '/auth/logout'}><div className="burger-button">Log out</div></Link>
        </div>
        :
        <div>
            <Link to="/"><div className="burger-button">Home</div></Link>
            <Link to="/login"><div className="burger-button">Log in</div></Link>
        </div>
        ;

        return (
            <div className="burger">
                  <div className="burger-menu" onClick={(e) => {this.props.dispatch(toggleBurger()); this.props.dispatch(setMessage(null, null));}}>
                        {links}
                  </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Burger);
