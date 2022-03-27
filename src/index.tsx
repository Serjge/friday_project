import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { store } from 'store';
import { darkTheme } from 'styles';
import { GlobalStyle } from 'styles/globalStyles';

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
reportWebVitals();
