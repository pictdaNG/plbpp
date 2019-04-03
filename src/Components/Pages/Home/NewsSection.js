import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewsSection extends Component {
  render() {
    return (
      <div className="news-n-events mt:40px uk-child-width-1-3@m">
        <h3 className="title">NEWS & <span className="theme-color uk-text-bold">EVENTS</span></h3>
        <div className="card">
          <div className="uk-card uk-card-default">
            <div className="media uk-card-media-top">
              <img src="./assets/img/event-1.png" alt="" />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title uk-text-bold">Training workshop for Procurement Officers</h3>
              <p>The Plateau State Public Sector Governance Reforms and Development Project in conjunction with Plateau State Bureau of Public Procurement organized training workshop for Procurement Officers and Accounting Officers of Ministries, Departments and Agencies of Government in September 2017.</p>
            </div>

            <div className="uk-card-footer">
              <span className="uk-text-danger"><span data-uk-icon="icon: user"></span>ADMIN</span>
              <span className="uk-text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 36.447 36.447" xmlSpace="preserve" >
                  <g>
                    <g>
                      <path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75    c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75    c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24    c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25    c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75    c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z     M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z" />
                      <rect x="6.724" y="14.626" width="4.595" height="4.089" />
                      <rect x="12.857" y="14.626" width="4.596" height="4.089" />
                      <rect x="18.995" y="14.626" width="4.595" height="4.089" />
                      <rect x="25.128" y="14.626" width="4.596" height="4.089" />
                      <rect x="6.724" y="20.084" width="4.595" height="4.086" />
                      <rect x="12.857" y="20.084" width="4.596" height="4.086" />
                      <rect x="18.995" y="20.084" width="4.595" height="4.086" />
                      <rect x="25.128" y="20.084" width="4.596" height="4.086" />
                      <rect x="6.724" y="25.54" width="4.595" height="4.086" />
                      <rect x="12.857" y="25.54" width="4.596" height="4.086" />
                      <rect x="18.995" y="25.54" width="4.595" height="4.086" />
                      <rect x="25.128" y="25.54" width="4.596" height="4.086" />
                    </g>
                  </g>
                </svg>02/03/2019
                  </span>
            </div>
          </div>
        </div>
        <div className="uk-width-1-1@s uk-flex  uk-flex-center mt:40px">
          <Link to="#" className="btn">LOAD MORE</Link>
        </div>
      </div>
    )
  }
}
