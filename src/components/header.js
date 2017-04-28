import React from 'react';
import {connect} from 'react-redux';
import Burger from './burger.js';
import {toggleBurger} from '../actions';

export class Header extends React.Component {
    render() {
        const burger = this.props.opts.burgerOpen ? <Burger /> : '';
        return (
          	<header>
              <div onClick={e => this.props.dispatch(toggleBurger())} className="burger-container">
                  <i className="fa fa-bars fa-lg"></i>
              </div>
                {burger}
                <h1>Rimworld stories</h1>
          	</header>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Header);
