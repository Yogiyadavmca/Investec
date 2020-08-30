/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './store/store';
import {Provider} from 'react-redux';

import RootNavigation from './routes/RootNavigation';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
