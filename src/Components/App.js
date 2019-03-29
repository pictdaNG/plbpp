import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from './Common/Header';
import NavBar from './Common/NavBar';
import Home from './Pages/Home/Home';
import Footer from './Common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;