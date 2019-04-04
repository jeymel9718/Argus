import React from 'react'
import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'
import ImgBackground from '../../../assets/wallpaper.jpg'
import IconUser from '../../../assets/user.png'
import IconLocked from '../../../assets/locked.png'

import Input from '../../components/login-components/logininput.js'
import LoginButton from '../../components/login-components/loginbutton'

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  _onEmailTextChanged = event => {
    this.setState({
      email: event.nativeEvent.text,
    })
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

  _onRegister = () => {
    return true
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackground}>
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
            placeholder="Email"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.email}
            onChange={this._onPasswordTextChanged}
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
        <LoginButton
          onPressButton={this._onRegister}
          navigation={this.props.navigation}
          message='Register'
          screen='Login'
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
})
