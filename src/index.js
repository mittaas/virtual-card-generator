import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import Redirect from './components/redirect';
import FormDetailPage from './components/formDetailPage';
import ProxyPage from './components/proxypage';
import Success from './components/success';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import history from '../src/history';



const routing = (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/redirecting" component={Redirect} />
      <Route exact path="/new" component={FormDetailPage} />
      <Route exact path="/debit" component={ProxyPage} />
      <Route exact path="/success" component={Success} />
      {/* <Route path="/post/:id" component={PostDetailPage} />
      <Route path="/club/:clubId" component={ClubDetailPage} />
      <Route path="/user/:userId" component={ProfileDetailPage} />
      <Route path="/account/find-your-account" component={FindYourAccountPage} />
      <Route path="/account/send-code" component={SendCodePage} />
      <Route path="/account/enter-code" component={EnterCode} />
      <Route path="/account/set-new-password" component={SetNewPassword} />
      <Route path="/account/password-reset-success" component={SuccessPasswordReset} />
      <Route path="/media/play" component={VideoDetailPage}/>
      <Route path="/media/view" component={ImageViewer}/> */}
     
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
