import React, { Component } from 'react';
import NewsSection from './NewsSection';
import AboutSection from './AboutSection';
import SliderSection from './SliderSection';
import LatestNews from './LatestNews';
import StandardSection from './StandardSection';

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
        imgSliderContainer.setAttribute("class", `img-hover ${classesArray[x]}`);
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
          imgSliderContainer.setAttribute("class", `img-hover ${classesArray[x]}`);
          x++;
        },4000);
      });
    }
  }
  
  render() {
    return (
      <section className="body">
        <div className="dContainer">
                 
          <SliderSection />
          
          <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slideshow="min-height: 60; max-height: 60; autoplay: true">           
            <LatestNews />
          </div> 
          <div className="docs mt:20px">
            <StandardSection />
          </div>
          <div className="about mt:20px">
            <AboutSection />
          </div>
          <NewsSection />
        </div>
      </section>
    )
  }
}
