import React, { Component } from 'react'

export default class SliderSection extends Component {
  render() {
    return (
      <div className="img-hover  active-1">
        <div className="img-1 uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src="./assets/img/img-1.jpg" alt="" />
          <div className="overlay uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
            <p className="uk-h4 uk-margin-remove">Governor Simon Bako Lalong</p>
            <span className="uk-text-small">Tuesday, Mar 26, 2019 </span>
          </div>
        </div>
        <div className="img-2 uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src="./assets/img/img-2.jpg" alt="" />
          <div className="overlay uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
            <p className="uk-h4 uk-margin-remove">Supervision of industrial site check</p>
            <span className="uk-text-small">Tuesday, Mar 26, 2019 </span>
          </div>
        </div>
        <div className="img-3 uk-inline-clip uk-transition-toggle" tabIndex="0">
          <img src="./assets/img/img-3.jpg" alt="" />
          <div className="overlay uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
            <p className="uk-h4 uk-margin-remove">Photo of Milling Machine </p>
            <span className="uk-text-small">Tuesday, Mar 26, 2019 </span>
          </div>
        </div>
      </div>
    )
  }
}
