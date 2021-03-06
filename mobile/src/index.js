import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { Toast } from 'react-native-redux-toast'

import './config/ReactotronConfig';

import { colors } from './styles';

import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={colors.background} />
        <App />
        <Toast />
      </PersistGate>
    </Provider>
  );
}
