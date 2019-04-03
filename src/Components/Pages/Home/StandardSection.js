import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StandardSection extends Component {
  render() {
    return (
      <div>
        <div className="uk-flex uk-flex-between">
          <h3 className="uk-margin-remove small-lh">
            STANDARD <br />
            <span className="bold-green">BID DOCUMENTS</span>
          </h3>
          <Link to="#" className="theme-color">VIEW ALL</Link>
        </div>
        <div className="link-docs">
          <div className="card-with-image">
            <div>
              <h4 className="small-lh">
                LAW OF<br /><span className="smaller">PROCUREMENT</span>
              </h4>
              <Link to="#" className="p">READ MORE</Link>
            </div>
            <img src="./assets/img/law.png" alt="" />
          </div>
          <div className="card-with-image">
            <div>
              <h4 className="small-lh">
                GUIDELINES OF<br /><span className="smaller">PROCUREMENT</span>
              </h4>
              <Link to="#" className="p">READ MORE</Link>
            </div>
            <img src="./assets/img/library.png" alt="" />
          </div>
          <div className="stacks-of-cards">
            <Link to="#" className="self-top">Standard Bidding Document for the Procurement of Works</Link>
            <Link to="#" className="self-center">Standard Request for Proposals for the Selection of Consulting
                            Firm</Link>
            <Link to="#" className="self-bottom">Standard Bidding Document for the procurement of goods</Link>
          </div>
        </div>
      </div>
    )
  }
}
