 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Router ,Switch, Router} from 'react-router-dom';
 import createBrowserHistory from 'history/createBrowserHistory';
 import App from './components/App';
 import Jokes from './components/Jokes';
 import Header from './components/Header';
 import './index.css';

 ReactDOM.render(
     <Router history={createBrowserHistory()}>
         <Switch>
             <Router exact path='/' render={() => <Header><App /></Header> } />
             <Router path='/jokes' render={() => <Header><Jokes /></Header> } />
         </Switch>
     </Router>,
      document.getElementById('root')
    );
