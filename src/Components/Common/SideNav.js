import React, { Component } from 'react'


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
          <li><a activeClassName="uk-active" exact={true} onClick={this.handleClick} href="/">Home</a></li>
          <li><a activeClassName="uk-active" exact={true} onClick={this.handleClick} href="/about">About Us</a></li>
          {/* <li><a activeClassName="uk-active"exact={true} onCLick={this.handleClick}  href="#">Documents (Downloads)</a></li>
                <li><a activeClassName="uk-active"exact={true} onCLick={this.handleClick}  href="#">Tenders</a></li>*/}
          <li><a activeClassName="uk-active" exact={true} onClick={this.handleClick}  href="/mandate">Mandate</a></li>
          <li><a activeClassName="uk-active" exact={true} onClick={this.handleClick}  href="/e-procurement">E-Procurement</a></li>
          {/*<li><a activeClassName="uk-active"exact={true} onCLick={this.handleClick}  href="#">Media</a></li>
                <li><a activeClassName="uk-active"exact={true} onCLick={this.handleClick}  href="#">More</a></li>
                <li><a activeClassName="uk-active"exact={true} onCLick={this.handleClick}  href="#">Contact</a></li>*/}
        </ul>
      </div>
    </div>
    )
  }
}
