import React from 'react';
import {connect} from 'react-redux';
import Burger from './ui-burger.js';
import {toggleBurger} from '../actions';
import {Link} from 'react-router-dom';

export class Header extends React.Component {
    render() {
        const headerLogin = this.props.currentUser.id ?
        <Link to={'/profile/' + this.props.currentUser.id}>
            <div className="header-login"><img alt='' className="profile-avatar header-pic" src={this.props.currentUser.avatarUrl} /></div>
        </Link>
        :
        <Link to='/login'><div className="header-login"><span className='button'>Log in</span></div></Link>
        ;

        return (
          	<header>
              <div onClick={e => this.props.dispatch(toggleBurger())} className="burger-container">
                  <i className="fa fa-bars fa-lg"></i>
              </div>
                <Burger />
                {headerLogin}
                <h1>Rimworld stories</h1>
          	</header>
        );
    }
}

export const mapStateToProps = state => (state.app);
export default connect(mapStateToProps)(Header);
