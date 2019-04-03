import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    
    let here = window.location.pathname;
    return (
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container" data-uk-navbar style={{position: 'relative', zIndex: '980'}}>
          <div className="main-container">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className={here == '/' ? "uk-active" : null}><Link to="/" >Home</Link></li>
                <li className={here == '/about' ? "uk-active" : null}><Link to="/about">About Us</Link></li>
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/documents">Documents</Link></li> */}
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/tender">Tenders</Link></li> */}
                <li className={here == '/e-procurement' ? "uk-active" : null}><Link to="/e-procurement">e-Procurement</Link></li>
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/open-contracting">Open Contracting</Link></li> */}
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/media">Media</Link></li> */}
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/">More</Link></li> */}
                {/* <li className={here == '/' ? "uk-active" : null}><Link to="/contact">Contact</Link></li> */}
              </ul>
              <Link className="uk-navbar-toggle" data-uk-navbar-toggle-icon to="#"></Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
