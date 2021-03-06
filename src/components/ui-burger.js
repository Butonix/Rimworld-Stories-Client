import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {toggleBurger, setMessage, logOut} from '../actions';

export class Burger extends React.Component {

    componentDidMount() {
        const dispatch = this.props.dispatch;
        const burgerContainer = document.getElementsByClassName('burger-container')[0];
        const burger = document.getElementsByClassName('burger')[0];
        const faBars = document.getElementsByClassName('fa-bars')[0];
        window.onclick = (event) => {
            if (event.target !== burger && event.target !== burgerContainer && event.target !== faBars) {
                dispatch(toggleBurger('close'))
            }
        }
    }

    burgerMenu() {
        if (this.props.burgerOpen) {
            return ''
        }
        return 'closed'
    }

    render() {
        const links = this.props.currentUser.id ?
        <div>
            <Link to={'/profile/' + this.props.currentUser.id} ><div className="burger-button">Profile</div></Link>
            <Link to="/write-story/new"><div className="burger-button">New Story</div></Link>
            <div className="burger-button" onClick={e => this.props.dispatch(logOut())}>Log out</div>
        </div>
        :
        <div>
            <Link to="/login"><div className="burger-button">Log in</div></Link>
        </div>
        ;

        return (
            <div className="burger">
                  <div className={"burger-menu " + this.burgerMenu()} onClick={(e) => {this.props.dispatch(toggleBurger('close')); this.props.dispatch(setMessage(null, null));}}>
                      <Link to="/"><div className="burger-button">Home</div></Link>
                      {links}
                      <a href="https://rimworldgame.com/" target="_blank"><div className="burger-button">Get Rimworld</div></a>
                  </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Burger);
