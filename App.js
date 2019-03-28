import React from 'react';
import {createStackNavigator} from 'react-navigation'

import LoginScreen from './screens/login'
import HomeScreen from './screens/home'

const App = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
})

export default App

