import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.sideNavRef = React.createRef();
  }
  handleClick = ()=>{
    let nav = this.sideNavRef.current;
    console.log(nav);
    setTimeout(()=>{
      nav.classList.remove('uk-offcanvas-overlay');
      nav.classList.remove('uk-open');
    }, 500)
  };
  render() {
    return (
    <div id="sidenav" ref={this.sideNavRef} data-uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column">
        <button className="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close="">
          {/*<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon">
            <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
            <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
          </svg>*/}
        </button>
        <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li><NavLink activeClassName="uk-active" exact={true} onClick={this.handleClick} to="/">Home</NavLink></li>
          <li><NavLink activeClassName="uk-active" exact={true} onClick={this.handleClick} to="/about">About Us</NavLink></li>
          {/* <li><NavLink activeClassName="uk-active"exact={true} onCLick={this.handleClick}  to="#">Documents (Downloads)</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true} onCLick={this.handleClick}  to="#">Tenders</NavLink></li>*/}
          <li><NavLink activeClassName="uk-active" exact={true} onClick={this.handleClick}  to="/mandate">Mandate</NavLink></li>
          <li><NavLink activeClassName="uk-active" exact={true} onClick={this.handleClick}  to="/e-procurement">E-Procurement</NavLink></li>
          {/*<li><NavLink activeClassName="uk-active"exact={true} onCLick={this.handleClick}  to="#">Media</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true} onCLick={this.handleClick}  to="#">More</NavLink></li>
                <li><NavLink activeClassName="uk-active"exact={true} onCLick={this.handleClick}  to="#">Contact</NavLink></li>*/}
        </ul>
      </div>
    </div>
    )
  }
}
