import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { GlobalStyle } from 'styles/globalStyles';

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <GlobalStyle/>
      <App/>
    </HashRouter>
  </Provider>
  , document.getElementById('root'),
);
reportWebVitals();
