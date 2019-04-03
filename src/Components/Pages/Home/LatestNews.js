import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LatestNews extends Component {
  render() {
    return (
      <div>
        <div className="news">Latest News</div>
        <ul className="uk-slideshow-items">
          <li>
            <Link to="#" className="p">Training workshop for Procurement Officers</Link>
          </li>
          <li>
            <Link to="#" className="p">Are We alright Folks</Link>
          </li>
          <li>
            <Link to="#" className="p">
              Breaking news, A Javascript bug killed a browser because a developer told it to console the bug infinitely.
                </Link>
          </li>
        </ul>

        <Link className="uk-position-center-left uk-position-small uk-hidden-hover" to="#" data-uk-slidenav-previous uk-slideshow-item="previous"></Link>
        <Link className="uk-position-center-right uk-position-small uk-hidden-hover" to="#" data-uk-slidenav-next uk-slideshow-item="next"></Link>
      </div>
    )
  }
}
