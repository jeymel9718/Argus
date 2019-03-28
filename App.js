import React from 'react';
import {createStackNavigator} from 'react-navigation'

import LoginScreen from './screens/login'
import HomeScreen from './screens/home'
import DeviceScreen from './screens/device';

const App = createStackNavigator({
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  Device: {screen:DeviceScreen}
})

export default App

