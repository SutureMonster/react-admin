import React from 'react';

import {Provider} from 'react-redux'
import store from './store/index';

// import './assets/App.css';
// import 'antd/dist/antd.less'
import 'antd/dist/antd.css'
import { HashRouter } from 'react-router-dom';
import { Layout } from './components/index';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <HashRouter>
          <Layout />
        </HashRouter>
      </Provider>
      
    </div>
  );
}

export default App;
