import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class LatestNews extends Component {
  render() {
    return (
      <div>
        <ul className="uk-slideshow-items">
          <li>
            <a href="!#" className="p">Training workshop for Procurement Officers</a>
          </li>
          <li>
            <a href="!#" className="p">Are We alright Folks</a>
          </li>
          <li>
            <a href="!#" className="p">
              Breaking news, A Javascript bug killed a browser because a developer told it to console the bug infinitely.
                </a>
          </li>
        </ul>

        <a href="!#" className="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
        <a href="!#" className="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
      </div>
    )
  }
}
