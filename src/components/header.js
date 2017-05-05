import React from 'react';
import {connect} from 'react-redux';
import Burger from './burger.js';
import {toggleBurger} from '../actions';
import {API_URL} from '../config.js';

export class Header extends React.Component {
    render() {
        const burger = this.props.burgerOpen ? <Burger /> : '';

        const headerLogin = this.props.currentUser.id ?
        <div className="header-login"><img alt='' className="profile-avatar header-pic" src={this.props.currentUser.avatarUrl} /></div>
        :
        <div className="header-login"><a href={API_URL + '/auth/facebook'}>Log in with FB</a></div>
        ;

        return (
          	<header>
              <div onClick={e => this.props.dispatch(toggleBurger())} className="burger-container">
                  <i className="fa fa-bars fa-lg"></i>
              </div>
                {burger}
                {headerLogin}
                <h1>Rimworld stories</h1>
          	</header>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Header);
