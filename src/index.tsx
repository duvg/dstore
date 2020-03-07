import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import generateStore from './redux/store';

let store = generateStore();

let WithRouter = () => <BrowserRouter><App /></BrowserRouter>;
let WithProvider = () => <Provider store={store}><WithRouter /></Provider>;

ReactDOM.render(<WithProvider />, document.getElementById('root'));

// If you want your app to work of fline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
