import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
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
            <li><NavLink activeClassName="uk-active" exact={true} to="/">Home</NavLink></li>
            <li><NavLink activeClassName="uk-active" exact={true} to="/about">About Us</NavLink></li>
            <li><NavLink activeClassName="uk-active" exact={true} to="/mandate">Mandate</NavLink></li>
            {/*<li><NavLink to="">Law</NavLink></li>
            <li><NavLink to="">Guidelines</NavLink></li>
            <li><NavLink to="">Tenders</NavLink></li>*/}
            <li><NavLink activeClassName="uk-active" exact={true} to="/news">News and Event</NavLink></li>
            {/*<li><NavLink to="">Awards</NavLink>Awards</li>
            <li><NavLink to="">Documents (Downloads)</NavLink></li>
            <li><NavLink to="">Frequently Ask Questions</NavLink></li>
            <li><NavLink to="">Training/Workshop</NavLink></li>*/}
            <li><NavLink activeClassName="uk-active" exact={true} to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="footer-nav">
          <h5 className="footer-title">LATEST NEWS</h5>
          <div className="uk-flex img-links">
            <Link className="img-link" to="">
              <img src="./assets/img/img-1.jpg" alt="" />
            </Link>
            <Link className="img-link" to="">
              <img src="./assets/img/img-3.jpg" alt="" />
            </Link>
            <Link className="img-link" to="">
              <img src="./assets/img/event-2.png" alt="" />
            </Link>
            <Link className="img-link" to="">
              <img src="./assets/img/event-1.png" alt="" />
            </Link>
          </div>
        </div>
        <CopyRight />
      </footer>
    )
  }
}
