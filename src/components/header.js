import React from 'react';
import {connect} from 'react-redux';

export class Header extends React.Component {
    render() {
        return (
          	<header>
                  <div className="burger-container">
                      <i className="fa fa-bars fa-lg"></i>
                  </div>
                  <h1>Rimworld stories</h1>
          	</header>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Header);
