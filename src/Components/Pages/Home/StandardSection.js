import React, { Component } from 'react';

export default class StandardSection extends Component {
  render() {
    return (
      <div>
        <div className="uk-flex uk-flex-between">
          <h3 className="uk-margin-remove small-lh">
            STANDARD <br />
            <span className="bold-green">BID DOCUMENTS</span>
          </h3>
          <a href="!#" className="theme-color">VIEW ALL</a>
        </div>
        <div className="link-docs">
          <div className="card-with-image">
            <div>
              <h4 className="small-lh">
                LAW OF<br /><span className="smaller">PROCUREMENT</span>
              </h4>
              <a href="!#" className="p">READ MORE</a>
            </div>
            <img src="./assets/img/law.png" alt="" />
          </div>
          <div className="card-with-image">
            <div>
              <h4 className="small-lh">
                GUIDELINES OF<br /><span className="smaller">PROCUREMENT</span>
              </h4>
              <a href="!#" className="p">READ MORE</a>
            </div>
            <img src="./assets/img/library.png" alt="" />
          </div>
          <div className="stacks-of-cards">
            <a href="!#" className="self-top">Standard Bidding Document for the Procurement of Works</a>
            <a href="!#" className="self-center">Standard Request for Proposals for the Selection of Consulting
                            Firm</a>
            <a href="!#" className="self-bottom">Standard Bidding Document for the procurement of goods</a>
          </div>
        </div>
      </div>
    )
  }
}
