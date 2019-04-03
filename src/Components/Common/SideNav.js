import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

export default class SideNav extends Component {
  render() {
    return (
    <div id="sidenav" data-uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li className="uk-active"><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="#">About</NavLink></li>
          <li><NavLink to="#">Documents</NavLink></li>
          <li><NavLink to="#">Tenders</NavLink></li>
          <li><NavLink to="#">e-Procurement</NavLink></li>
          <li><NavLink to="/e-procurement">Open Contracting</NavLink></li>
          <li><NavLink to="#">Media</NavLink></li>
          <li><NavLink to="#">More</NavLink></li>
          <li><NavLink to="#">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    )
  }
}
