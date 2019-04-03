import React, { Component } from 'react'
import Header from '../../Common/Header';
import NavBar from '../../Common/NavBar';
import About from './About';
import Footer from '../../Common/Footer';

export default class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <About />
        <Footer />
      </div>
    )
  }
}
