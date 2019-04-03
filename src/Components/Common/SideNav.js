import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

export default class SideNav extends Component {
  render() {
    return (
    <div id="sidenav" data-uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li><NavLink activeClassName="uk-active"exact={true}  to="/">Home</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="/about">About Us</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="#">Documents (Downloads)</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="#">Tenders</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="/mandate">Mandate</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="/e-procurement">E-Procurement</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="#">Media</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="#">More</NavLink></li>
          <li><NavLink activeClassName="uk-active"exact={true}  to="#">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    )
  }
}
