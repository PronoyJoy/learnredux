// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import CounterPage from '../src/pages/CounterPage';

function App() {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
}

export default App;
