import React from 'react'
import Dimensions from 'Dimensions'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import ImgBackground from '../../assets/wallpaper.jpg'
import IconUser from '../../assets/user.png'
import IconLocked from '../../assets/locked.png'
import LogoReact from '../../assets/logo.png'

import Input from '../../components/login-components/logininput.js'
import LoginButton from '../../components/login-components/loginbutton'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
const USER = {
  username: 'Thanos',
  password: '123',
}

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  _onPasswordTextChanged = event => {
    this.setState({
      password: event.nativeEvent.text,
    })
  }

  _onUsernameTextChanged = event => {
    this.setState({
      username: event.nativeEvent.text,
    })
  }

  _isValidUser = () => {
    if (this.state.username === USER.username && this.state.password === USER.password) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackground}>
        <View style={styles.containerImage}>
          <Image source={LogoReact} style={styles.image} />
          <Text style={styles.text}>SmartWindows</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Input
            source={IconUser}
            placeholder="Username"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.username}
            onChange={this._onUsernameTextChanged}
          />
          <Input
            source={IconLocked}
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.password}
            onChange={this._onPasswordTextChanged}
          />
        </KeyboardAvoidingView>
        <View style={styles.containerSignup}>
          <Text style={styles.text}>Create Account</Text>
          <Text style={styles.text}>Forgot Password?</Text>
        </View>
        <LoginButton
          onPressButton={this._isValidUser}
          navigation={this.props.navigation}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  containerImage: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  containerSignup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 65,
    width: DEVICE_WIDTH,
  },
  image: {
    height: DEVICE_WIDTH * 0.50,
    width: DEVICE_WIDTH * 0.50,
  },
  picture: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
  },
})