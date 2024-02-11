/**
 * @format
 */

import {AppRegistry} from 'react-native';
import PureApp from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PureApp />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
