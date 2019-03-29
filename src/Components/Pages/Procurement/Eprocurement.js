import React, { Component } from 'react'
import Header from '../../Common/Header';
import NavBar from '../../Common/NavBar';
import Summary from './Summary';
import FilterProject from './FilterProject';
import Footer from '../../Common/Footer';

export default class Eprocurement extends Component {
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
