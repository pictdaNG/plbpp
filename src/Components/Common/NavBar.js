import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    
    let here = window.location.pathname;
    return (
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container" data-uk-navbar style={{position: 'relative', zIndex: '980'}}>
          <div className="main-container">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><NavLink activeClassName="uk-active"exact={true}  to="/">Home</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true}  to="/about">About Us</NavLink></li>
               {/* <li><NavLink activeClassName="uk-active"exact={true}  to="#">Documents (Downloads)</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true}  to="#">Tenders</NavLink></li>*/}
                <li><NavLink activeClassName="uk-active"exact={true}  to="/mandate">Mandate</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true}  to="/e-procurement">E-Procurement</NavLink></li>
                {/*<li><NavLink activeClassName="uk-active"exact={true}  to="#">Media</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true}  to="#">More</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true}  to="#">Contact</NavLink></li>*/}
              </ul>
              <button className="uk-navbar-toggle" data- uk-toggle="target: #sidenav" data-uk-icon="icon: menu" />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
