import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top;">
        <nav className="uk-navbar-container" data-uk-navbar style={{position: 'relative', zIndex: '980'}}>
          <div className="main-container">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="/" >Home</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Documents</a></li>
                <li ><a href="#">Tenders</a></li>
                <li ><a href="/pbb">e-Procurement</a></li>
                <li ><a href="#">Open Contracting</a></li>
                <li ><a href="#">Media</a></li>
                <li ><a href="#">More</a></li>
                <li ><a href="#">Contact</a></li>
              </ul>
              <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#"></a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
