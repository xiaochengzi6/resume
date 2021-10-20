import React from 'react';
import {render} from 'react-dom';
import App from './App'
import { createStore  } from 'redux'
import {Provider} from 'react-redux'
import Reducer from './redux/reducer'
// import State from './redux/state'
let store = createStore(Reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


