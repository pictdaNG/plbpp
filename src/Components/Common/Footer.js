import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <li>Home</li>
            <li>About Us</li>
            <li>Mandate</li>
            <li>Law</li>
            <li>Guidelines</li>
            <li>Tenders</li>
            <li>News and Event</li>
            <li>Awards</li>
            <li>Documents (Downloads)</li>
            <li>Frequently Ask Questions</li>
            <li>Training/Workshop</li>
            <li>Contact Us</li>
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
