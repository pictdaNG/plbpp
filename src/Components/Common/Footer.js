import React, { Component } from 'react'

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
            <li>Download</li>
            <li>Functions And Powers</li>
            <li>PLPPA</li>
            <li>Mandate</li>
            <li>News and Event</li>
            <li>Procurement Guidelines</li>
            <li>Procurement Law</li>
            <li>Standard Bid Documents</li>
            <li>Tender</li>
          </ul>
        </div>
        <div className="footer-nav">
          <h5 className="footer-title">LATEST NEWS</h5>
          <div className="uk-flex img-links">
            <a href="#" className="img-link">
              <img src="./assets/img/img-1.jpg" alt="" />
            </a>
            <a href="#" className="img-link">
              <img src="./assets/img/img-3.jpg" alt="" />
            </a>
            <a href="#" className="img-link">
              <img src="./assets/img/event-2.png" alt="" />
            </a>
            <a href="#" className="img-link">
              <img src="./assets/img/event-1.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subfooter">
          <span>Copyright &copy; All right reserved. | Designed by PLPPA IT Department </span>
        </div>
      </footer>
    )
  }
}
