import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class News extends Component {
  render() {
    return (
      <section className="body">
        <div className="dContainer">

          <div className="about">
            <div className="info">
              <h3 className="title">NEWS & <span className="theme-color uk-text-bold">EVENTS</span></h3>
              <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small" data-uk-grid>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news1.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news2.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news3.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news4.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news5.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news6.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news7.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news8.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div>
                  <div className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle">
                    <img src="./assets/img/gallery/news9.jpg" alt="Sample image one"/>
                  </div>
                </div>
                <div className="uk-tile uk-tile-secondary uk-width-1-1@m uk-padding-small">
                  <p className="uk-h4 uk-text-center">3 Day Training Workshop on the impact of public procurement Law/ Regulations in Plateau State(Creating Awareness) For the Board Members of the Bureau and Procurement Officers in the Minstries, Departments and Agencies (MDAs)</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}
