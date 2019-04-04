import React from 'react';
import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/screens/login'
import HomeScreen from './src/screens/home'
import DeviceScreen from './src/screens/device'
import SettingsScreen from './src/screens/settings'
import RegisterScreen from './src/screens/register'

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Device: { screen: DeviceScreen },
  Settings: { screen: SettingsScreen },
  Register: { screen: RegisterScreen }
})

export default App

