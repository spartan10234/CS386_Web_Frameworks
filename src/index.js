import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';
import SignInPage from './SignInPage';
import ProfileTab from './ProfileTab'
import TextField from './TextField'
import caltest from './caltest';
import StudentSearch from './StudentSearch';
import Profile from './Profile'

import StudentView from './StudentView/StudentPage';*/
import * as serviceWorker from './serviceWorker';
import AdviserTab from './TabsForAdvisor';

ReactDOM.render(<AdviserTab/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
