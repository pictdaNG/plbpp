import React, { Component } from 'react';


export default class AboutSection extends Component {
  render() {
    return (
      <div className="info">
        <h3 className="title">ABOUT <span className="theme-color uk-text-bold">PLPPA</span></h3>

        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
          <div className="uk-card-media-left media uk-cover-container">
            <img src="./assets/img/lally.png" alt="" />
          </div>
          <div className="uk-flex uk-flex-middle">
            <div className="uk-card-body">
              <h3>History</h3>
              <p>The wind of change in public procurement that guarantees transparency, accountability, competition and cost effectiveness was imbibed by the Plateau State Government.</p>
              <p> A Law that seeks to bring a reverse in Public procurement process was considered by the Plateau State House of assembly.</p>
            </div>
          </div>
        </div>
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
          <div className="uk-flex-last@s media uk-card-media-right uk-cover-container">
            <img src="./assets/img/outing.png" alt="" />
          </div>
          <div className="uk-flex uk-flex-middle">
            <div className="uk-card-body">
              <p>On December 17, 2015 a law was passed by the State Assembly as Plateau State Bureau of Public Procurement Bill. It was signed into Law by the Plateau state Governor, Rt. Hon. Simon Bako Lalong on the 1st February, 2016. Plateau State keyed in to the International best practice in public procurement.</p>

              <p>Bldr. Peter Y. Dogo, the pioneer Director General was appointed by the Executive Governor and confirmed by the House of assembly on 14th February, 2017. This appointment and subsequent inauguration kick-started the activities of the Bureau of Public Procurement in Plateau State.</p>
            </div>
          </div>
        </div>
        <a href="!#" className="btn">READ MORE</a>
      </div>
    )
  }
}
