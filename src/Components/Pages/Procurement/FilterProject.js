import React, { Component } from 'react';


export default class FilterProject extends Component {
  render() {
    return (
      <section className="container-fluid body ">
        <div className="row el-paddingTop30">
          <div className="col-md-12 col-lg-3 ">
            <div className="row">
              <div className="col">
                <h3>FILTER PROJECTS</h3>
                <div className="uk-margin uk-card uk-card-body uk-card-default">
                  <label className="uk-form-label" htmlFor="form-stacked-select">
                    <h5>FILTER BY SECTOR</h5>
                  </label>
                  <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select">
                      <option value="Health">Health</option>
                      <option value="Construction">Construction</option>
                      <option value="Education">Education</option>
                      <option value="Finance">Finance</option>
                      <option value="Social Development">Social Development</option>
                      <option value="Telecommunications">Telecommunications</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Environment">Environment</option>
                      <option value="Justice">Justice</option>
                    </select>
                  </div>
                </div>
                <div className="uk-margin uk-card uk-card-body uk-card-default">
                  <label className="uk-form-label" htmlFor="form-stacked-select">
                    <h5>FILTER BY YEAR</h5>
                  </label>
                  <div className="uk-form-controls">
                    <div>
                      <label
                      ><input className="uk-checkbox" type="checkbox" checked />
                        2019</label
                      >
                    </div>
                    <div>
                      <label
                      ><input className="uk-checkbox" type="checkbox" />
                        2018</label
                      >
                    </div>
                    <div>
                      <label
                      ><input className="uk-checkbox" type="checkbox" />
                        2017</label
                      >
                    </div>
                    <div>
                      <label
                      ><input className="uk-checkbox" type="checkbox" />
                        2016</label
                      >
                    </div>
                  </div>
                </div>
                <div className="uk-margin uk-card uk-card-body uk-card-default">
                  <label className="uk-form-label" htmlFor="form-stacked-select"
                  ><h5>
                      FILTER BY MINISTRIES, DEPARTMENTS &amp; AGENCIES
                            </h5></label
                  >
                  <div className="uk-form-controls">
                    <select className="uk-select" id="form-stacked-select">
                      <option value="9">College Of Education</option>
                      <option value="12">Ministry of Agriculture</option
                      ><option value="7">Ministry of Education</option
                      ><option value="13"
                      >Ministry of Environment and Natural Resources</option
                      ><option value="4">Ministry of Finance</option
                      ><option value="1"
                      >Ministry of Health & Human Services</option
                      ><option value="15"
                      >Ministry of Information and Home Affairs</option
                      ><option value="19">Ministry of Justice</option
                      ><option value="11"
                      >Ministry of Science and Technology</option
                      ><option value="16">Ministry of Water Resources</option
                      ><option value="6">Ministry of Women Affairs</option
                      ><option value="2"
                      >Ministry of Works Housing and Transport</option
                      ><option value="8">Ministry of Youth and Sport</option
                      ><option value="5">Ministry of Youth And Sports</option
                      ><option value="20">Planning and Budget Commission</option
                      ><option value="21"
                      >Secretary to the State Government</option
                      ><option value="3"
                      >State Universal Basic Education</option
                      >
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9 ">
            <div className="row">
              <div className="col">
                <h3>PROJECTS</h3>
              </div>
            </div>
            <div className="uk-overflow-auto">
              <table className="uk-table uk-table-striped">
                <thead className="el-tableHead">
                  <tr>
                    <th>Title</th>
                    <th>Contract Amount</th>
                    <th>Contractor</th>
                    <th>LGA</th>
                    <th>Approval Year</th>
                    <th>Procurring Entity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                </tbody>
              </table>
              <ul className="uk-pagination uk-flex-right uk-margin-medium-top" data-uk-margin >
                <li>
                  <a href="!#"><span data-uk-pagination-previous></span></a>
                </li>
                <li><a href="!#">1</a></li>
                <li className="uk-disabled"><span>...</span></li>
                <li><a href="!#">5</a></li>
                <li><a href="!#">6</a></li>
                <li className="uk-active"><span>7</span></li>
                <li><a href="!#">8</a></li>
                <li>
                  <a href="!#"><span data-uk-pagination-next></span></a>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col">
                <h3>CHART SUMMARY</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <canvas height="300" id="myChart"></canvas>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <canvas height="300" id="myChart2"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
