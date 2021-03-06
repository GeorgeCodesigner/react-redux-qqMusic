/**
 * Created by wuming on 2017/7/11.
 */
import './utils/antm-viewport.min'; // 配合webpack配置的pxtorem rootValue: 100使用，将antd-mobile里面的px单位转换成rem单位
import './assets/css/reset.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home/Home';
// import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from '../src/store/configureStore';
// const history = createBrowserHistory();
const store = configureStore();
render(
    <Provider store={store}>
         {/* <Router history={history}>
            <Route path="/" component={Home}></Route>
        </Router> */}
        <HashRouter>
            <Route path="/" component={Home}></Route>
        </HashRouter>
    </Provider>,
    document.getElementById("app")
);