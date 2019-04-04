import React, { Component } from 'react'
import Header from '../../Common/Header';
import NavBar from '../../Common/NavBar';
import Mandate from './Mandate';
import Footer from '../../Common/Footer';

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
        <Mandate />
        <Footer />
      </>
    )
  }
}
