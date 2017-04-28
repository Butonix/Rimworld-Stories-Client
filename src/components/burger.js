import React from 'react';
import {connect} from 'react-redux';

export class Burger extends React.Component {
    render() {
        return (
            <div className="burger">
                  <div className="burger-menu">
                        <a href="/"><div className="burger-button">Home</div></a>
                        <a href="/profile"><div className="burger-button">Profile</div></a>
                  </div>
            </div>
        );
    }
}

export const mapStateToProps = state => (state);
export default connect(mapStateToProps)(Burger);
