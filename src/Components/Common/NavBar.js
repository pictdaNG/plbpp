import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  render() {

    return (
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container" data-uk-navbar style={{position: 'relative', zIndex: '980'}}>
          <div className="main-container">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><a activeClassName="uk-active" exact={true}  href="/">Home</a></li>
                <li><a activeClassName="uk-active" exact={true}  href="/about">About Us</a></li>
               {/* <li><a activeClassName="uk-active"exact={true}  href="#">Documents (Downloads)</a></li>
                <li><a activeClassName="uk-active"exact={true}  href="#">Tenders</a></li>*/}
                <li><a activeClassName="uk-active" exact={true}  href="/mandate">Mandate</a></li>
                <li><a activeClassName="uk-active" exact={true}  href="/e-procurement">E-Procurement</a></li>
                {/*<li><a activeClassName="uk-active"exact={true}  href="#">Media</a></li>
                <li><a activeClassName="uk-active"exact={true}  href="#">More</a></li>
                <li><a activeClassName="uk-active"exact={true}  href="#">Contact</a></li>*/}
              </ul>
              <button className="uk-navbar-toggle" data- uk-toggle="target: #sidenav" data-uk-icon="icon: menu" />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
