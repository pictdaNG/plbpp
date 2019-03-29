import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    
    return (
      <div>
        <nav id="topbar">
          <div className="nav-container">
            <ul>
              <li><Link to=""><img src="../assets/img/facebook.png" alt="" /></Link></li>
              <li><Link to=""><img src="../assets/img/twitter.png" alt="" /></Link></li>
              <li><Link to=""><img src="../assets/img/instagram.png" alt="" /></Link></li>
            </ul>
            <div className="currentDate">
              <span><img src="../assets/img/calender.png" alt="" /></span>
              <span className="date"></span>
            </div>
          </div>
        </nav>    
        <nav id="subnav">
          <div className="sub-container">
            <img className="logo" src="../assets/img/logo.png" alt="" />
            <img className="coverImg" src="../assets/img/topCover.png" alt="" />
          </div>
        </nav>
      </div>
    )
  }
}
