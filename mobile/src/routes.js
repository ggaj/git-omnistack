import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import Main from './pages/Main';

export default (signedIn = false) =>
// export default
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main,
      },
      {
        initialRouteName: signedIn ? 'Main' : 'SignIn',
      }
    )
  );
