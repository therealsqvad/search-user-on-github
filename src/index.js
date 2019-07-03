import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas';

const store = configureStore();

store.runSaga(rootSaga);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
