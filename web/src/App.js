import React from 'react';
// import { ToastContainer } from 'react-toastify';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import GlobalStyle from '~/styles/global';

import history from '~/services/history';
import Routes from '~/routes';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          {/* <ToastContainer autoClose={3000} /> */}
          <ReduxToastr />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;