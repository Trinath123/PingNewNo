import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import WelcomeScreen from './src/Welcome';
import Login from './src/Login';
import Forgot from './src/Forgot';

const AuthNavigator = createStackNavigator({
  Login: {screen: Login},
  Forgot: {screen: Forgot},
});

export const AppNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: AuthNavigator},
});

export default createAppContainer(AppNavigator);
