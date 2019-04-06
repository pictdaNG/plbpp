import React, { Component } from 'react'

import DateView from "./Date";

export default class Header extends Component {
  
  render() {
    
    return (
      <div>
        <nav id="topbar">
          <div className="nav-container">
            <ul>
              <li><a href="//facebook.com/plateaubpp"><img src="../assets/img/facebook.png" alt=""/></a></li>
              <li><a href="//twitter.com/plateaubpp"><img src="../assets/img/twitter.png" alt=""/></a></li>
              <li><a href="//instagram.com/plateaustatebpp"><img src="../assets/img/instagram.png" alt=""/></a></li>
            </ul>
            <div className="currentDate">
              <span><img src="../assets/img/calender.png" alt="" /></span>
              <DateView />
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
