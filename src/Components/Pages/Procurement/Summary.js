import React, { Component } from 'react'

export default class Summary extends Component {
  render() {
    return (
      <section className="body container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-3 ">
            <div className="el-banner">
              <div className="row">
                <div className="col el-center el-flex align-items-center">
                  <div className="el-leftHolder">
                    <img src="./assets/img/platStet.png" alt="" />
                    <h3>Plateau State Open Contracting Portal</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-9">
            <div className="el-cards-holder">
              <div className="row">
                <div className="col">
                  <h3>SUMMARY</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="el-card el-flex">
                    <div className="col-md-4  el-bgColorGreen  el-center">
                      <img src="./assets/img/abacus.png" alt="" />
                    </div>
                    <div className="col-md-8 el-flex align-items-center">
                      <div className="el-content-holder">
                        <p className="el-cardTitle">
                          TOTAL NUMBER OF PROJECTS
                                        </p>
                        <p className="el-cardFigure">
                          1024
                                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="el-card el-flex">
                    <div className="col-md-4  el-bgColorRed  el-center">
                      <img src="./assets/img/cashbox.png" alt="" />
                    </div>
                    <div className="col-md-8 el-flex align-items-center">
                      <div className="el-content-holder">
                        <p className="el-cardTitle">
                          TOTAL SUM OF PROJECTS
                                        </p>
                        <p className="el-cardFigure">
                          ₦ 45,091,199,582
                                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="el-card el-flex">
                    <div className="col-md-4  el-bgColorYellow el-center">
                      <img src="./assets/img/graph.png" alt="" />
                    </div>
                    <div className="col-md-8 el-flex align-items-center">
                      <div className="el-content-holder">
                        <p className="el-cardTitle">
                          HIGHEST CONTRACT AMOUNT
                                        </p>
                        <p className="el-cardFigure">
                          ₦ 2,283,102,632
                                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="el-card el-flex">
                    <div className="col-md-4  el-bgColorGreen el-center">
                      <img src="./assets/img/graph(2).png" alt="" />
                    </div>
                    <div className="col-md-8 el-flex align-items-center">
                      <div className="el-content-holder">
                        <p className="el-cardTitle">
                          LOWEST CONTRACT AMOUNT
                                        </p>
                        <p className="el-cardFigure">
                          ₦ 210,735
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
