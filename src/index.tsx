import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './modules/Layout';
import store from "./store/store";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Layout />
    </Provider>
);
