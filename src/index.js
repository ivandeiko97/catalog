import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Shop from './redux/reducer';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import CatalogHadler from './components/catalog/CatalogHandler';
import CartHandler from './components/cart/CartHandler';
import { createStore } from 'redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(Shop);

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={CatalogHadler} />
          <Route exact path="/cart" component={CartHandler} />
        </Switch>
      </App>
    </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
