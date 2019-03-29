import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './Components/App';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { Route, Redirect, Router } from "react-router-dom";
import Eprocurement from './Components/Pages/Procurement/Eprocurement';


const history = createBrowserHistory();

const MyRouter = () => {
  return (
    <Router history={history}>
      <div className="wrapper">
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/pbb" component={Eprocurement} />
        
        {/* <Route exact={true} path="/reset-password" component={ResetPassword} /> */}
      </div>
    </Router>
  );
};
ReactDOM.render(<MyRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
