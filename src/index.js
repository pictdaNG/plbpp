
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import App from './Components/App';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { Route, Router, Switch } from "react-router-dom";
import Eprocurement from './Components/Pages/Procurement/Eprocurement';
import About from './Components/Pages/About/About';
import SideNav from "./Components/Common/SideNav";
import Mandate from "./Components/Pages/Mandate/Mandate";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import NavBar from "./Components/Common/NavBar";
import News from "./Components/Pages/News/News";


const history = createBrowserHistory();

const MyRouter = () => {
  return (
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/e-procurement" component={Eprocurement} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/mandate" component={Mandate} />
          <Route exact={true} path="/news" component={News} />
        </Switch>
        <Footer/>
        <SideNav/>
      </div>
    </Router>
  );
};
ReactDOM.render(<MyRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
