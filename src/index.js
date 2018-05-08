import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import router from "./Router";
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
