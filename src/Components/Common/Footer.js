import React, { Component } from 'react';
// import {Link, NavLink} from 'react-router-dom';
import CopyRight from './CopyRight';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-nav">
          <img className="map" src="./assets/img/PLPPA.png" alt="" />
        </div>
        <div className="footer-nav">
          <h5 className="footer-title">CATEGORIES</h5>
          <ul className="uk-list uk-list-bullet">
            <li><a activeClassName="uk-active" exact={true} href="/">Home</a></li>
            <li><a activeClassName="uk-active" exact={true} href="/about">About Us</a></li>
            <li><a activeClassName="uk-active" exact={true} href="/mandate">Mandate</a></li>
            {/*<li><a href="">Law</a></li>
            <li><a href="">Guidelines</a></li>
            <li><a href="">Tenders</a></li>*/}
            <li><a activeClassName="uk-active" exact={true} href="/news">News and Event</a></li>
            {/*<li><a href="">Awards</a>Awards</li>
            <li><a href="">Documents (Downloads)</a></li>
            <li><a href="">Frequently Ask Questions</a></li>
            <li><a href="">Training/Workshop</a></li>*/}
            {/*<li><a activeClassName="uk-active" exact={true} href="/contact">Contact Us</a></li>*/}
          </ul>
        </div>
        <div className="footer-nav">
          <h5 className="footer-title">LATEST NEWS</h5>
          <div className="uk-flex img-links">
            <a className="img-link" href="!#">
              <img src="./assets/img/img-1.jpg" alt="" />
            </a>
            <a className="img-link" href="!#">
              <img src="./assets/img/img-3.jpg" alt="" />
            </a>
            <a className="img-link" href="!#">
              <img src="./assets/img/event-2.png" alt="" />
            </a>
            <a className="img-link" href="!#">
              <img src="./assets/img/event-1.png" alt="" />
            </a>
          </div>
        </div>
        <CopyRight />
      </footer>
    )
  }
}
