import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';
import { createStore } from '../node_modules/redux/dist/redux';
import rootReducer from './modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import { Provider } from '../node_modules/react-redux/dist/react-redux';

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
