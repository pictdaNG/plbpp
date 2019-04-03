import React, { Component } from 'react'
import Header from '../../Common/Header';
import NavBar from '../../Common/NavBar';
import Summary from './Summary';
import FilterProject from './FilterProject';
import Footer from '../../Common/Footer';
import Chart from 'chart.js';

export default class Eprocurement extends Component {
  
  componentDidMount() {
    let date = document.querySelector('.date');
    let current = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.innerText = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;
    var ctx = document.getElementById("myChart").getContext("2d");
    var ctx2 = document.getElementById("myChart2").getContext("2d");
    if (ctx || ctx2) {
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: "Number of Procurement Activities",
              data: [98, 110, 158, 145, 243, 363],
              backgroundColor: "#306c49d2",
              borderColor: "#ebb653",
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: "Total Contract Sum Per Year",
              data: [
                1823453876,
                3986562787,
                16875345876,
                13782654673,
                14875283467,
                13765345987
              ],
              backgroundColor: "#306c49d2",
              borderColor: "#ebb653",
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  
  }
  
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Summary />
        <FilterProject />
        <Footer />
      </div>
    )
  }
}
