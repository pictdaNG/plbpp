import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  
  componentDidMount() {
    let date = document.querySelector('.date');
    let current = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.innerText = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
// UIkit.notification('Are We Good');
  
    let imgSliderContainer = document.querySelector('.img-hover');
    if (imgSliderContainer) {
// let apd = pageYOffset.bind(this);
// console.log(apd);
      let classesArray = ['active-1','active-2','active-3'];
      let x = 0;
      let imgSlideInterval =  setInterval(()=> {
      
        if (x===3){
          x = 0
        }
        imgSliderContainer.setAttribute("class", `img-hover mt:20px ${classesArray[x]}`);
        x++;
      },4000);
    
      imgSliderContainer.addEventListener('mouseenter', ()=>{
        clearInterval(imgSlideInterval)
      });
    
      imgSliderContainer.addEventListener('mouseleave', ()=>{
      
        imgSlideInterval =  setInterval(()=> {
        
          if (x===3){
            x = 0
          }
          imgSliderContainer.setAttribute("class", `img-hover mt:20px ${classesArray[x]}`);
          x++;
        },4000);
      });
    }
  }
  
  render() {
    return (
      <section className="body">
        <div className="dContainer">
          <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slideshow="min-height: 60; max-height: 60; autoplay: true">
            <div className="news">Latest News</div>
            <ul className="uk-slideshow-items">
              <li>
                <Link to="#" className="p">Hello World</Link>
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
          <div className="img-hover mt:20px active-1">
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
          <div className="docs mt:20px">
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
          <div className="about mt:20px">
            <div className="info">
              <h3 className="title">ABOUT <span className="theme-color uk-text-bold">PLPPA</span></h3>
              <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                <div className="uk-card-media-left media uk-cover-container">
                  <img src="./assets/img/lally.png" alt="" />
                </div>
                <div className="uk-flex uk-flex-middle">
                  <div className="uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum, dolor iusto quisquam quos rem. At eos eum ipsum quidem sed suscipit vitae. Itaque, qui, tenetur? Cupiditate dolor ipsam perferendis?</p>
                  </div>
                </div>
              </div>
              <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                <div className="uk-flex-last@s media uk-card-media-right uk-cover-container">
                  <img src="./assets/img/outing.png" alt="" />
                </div>
                <div className="uk-flex uk-flex-middle">
                  <div className="uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae corporis cupiditate facilis in iusto laudantium mollitia officia provident quae quod rem ut velit voluptas, voluptatibus? Dolor neque non unde!</p>
                  </div>
                </div>
              </div>
              <Link to="#" className="btn">READ MORE</Link>
            </div>
          </div>
          <div className="news-n-events mt:40px uk-child-width-1-3@m">
            <h3 className="title">NEWS & <span className="theme-color uk-text-bold">EVENTS</span></h3>
            <div className="card">
              <div className="uk-card uk-card-default">
                <div className="media uk-card-media-top">
                  <img src="./assets/img/event-1.png" alt="" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold">Media Top</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                
                <div className="uk-card-footer">
                  <span className="uk-text-danger"><span data-uk-icon="icon: user"></span>ADMIN</span>
                  <span className="uk-text-danger"><svg xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                          id="Capa_1" x="0px" y="0px" width="20px" height="20px"
                                          viewBox="0 0 36.447 36.447"  xmlSpace="preserve"
                                          >
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
    </svg>02/03/2019</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="uk-card uk-card-default">
                                    <div className="media uk-card-media-top">
                                      <img src="./assets/img/event-2.png" alt="" />
                        </div>
                                      <div className="uk-card-body">
                                        <h3 className="uk-card-title uk-text-bold">Media Top</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                      </div>
                                      <div className="uk-card-footer">
                                        <span className="uk-text-danger"><span uk-icon="icon: user"></span>ADMIN</span>
                                        <span className="uk-text-danger"><svg xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                          id="Capa_1" x="0px" y="0px" width="20px" height="20px"
                                          viewBox="0 0 36.447 36.447"  xmlSpace="preserve"
                                          >
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
    </svg>02/03/2019</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="uk-card uk-card-default">
                                    <div className="media uk-card-media-top">
                                      <img src="./assets/img/event-3.png" alt="" />
                        </div>
                                      <div className="uk-card-body">
                                        <h3 className="uk-card-title uk-text-bold">Media Top</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                      </div>
                                      <div className="uk-card-footer">
                                        <span className="uk-text-danger"><span uk-icon="icon: user"></span>ADMIN</span>
                                        <span className="uk-text-danger">
                                          <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                          id="Capa_1" x="0px" y="0px" width="20px" height="20px"
                                          viewBox="0 0 36.447 36.447"  xmlSpace="preserve"
                                          >
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
    </svg>02/03/2019</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="uk-width-1-1@s uk-flex  uk-flex-center mt:40px">
                                  <Link to="#" className="btn">LOAD MORE</Link>
                                </div>
                              </div>
                            </div>
    </section>
    )
  }
}
