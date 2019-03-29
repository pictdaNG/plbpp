import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container" data-uk-navbar style={{position: 'relative', zIndex: '980'}}>
          <div className="main-container">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><Link to="/" >Home</Link></li>
                <li ><Link to="/about">About</Link></li>
                <li ><Link to="/documents">Documents</Link></li>
                <li ><Link to="/tender">Tenders</Link></li>
                <li ><Link to="/pbb">e-Procurement</Link></li>
                <li ><Link to="/open-contracting">Open Contracting</Link></li>
                <li ><Link to="/media">Media</Link></li>
                <li ><Link to="/">More</Link></li>
                <li ><Link to="/contact">Contact</Link></li>
              </ul>
              <Link className="uk-navbar-toggle" data-uk-navbar-toggle-icon to="#"></Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
