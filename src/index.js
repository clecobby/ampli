import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import landing from './views/LandingPage/landing'
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
Amplify.configure(config);

const Routing = () => {
  return(
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/" component={landing} />
        <Route path="/app" component={App} />
        {/* <Route path="/service" component={Service} /> */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
