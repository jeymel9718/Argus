import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/screens/login'
import HomeScreen from './src/screens/home'
import DeviceScreen from './src/screens/device'
import SettingsScreen from './src/screens/settings'
import RegisterScreen from './src/screens/register'
import AlarmScreen from './src/screens/alarm'
import EnvironmentScreen from './src/screens/environment'

const App = createStackNavigator({
  Alarm: { screen: AlarmScreen },
  Device: { screen: DeviceScreen },
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Settings: { screen: SettingsScreen },
  Environment: { screen: EnvironmentScreen }
},
  {
    initialRouteName: 'Login'
  })

export default App

