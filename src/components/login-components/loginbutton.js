import React from 'react'
import Dimensions from 'Dimensions'
import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { colors } from '../../styles'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height
const MARGIN = 40

export default class LoginButton extends React.Component {

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true })
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()

    setTimeout(() => {
      this._onGrow()
    }, 2000)

    setTimeout(() => {
      if (this.props.onPressButton()) {
        this.props.navigation.navigate(this.props.screen)
      } else {
        alert("Incorrecto")
      }
      this.setState({ isLoading: false })
      this.buttonAnimated.setValue(0)
      this.growAnimated.setValue(0)
    }, 2300)
  }

  constructor() {
    super()
    this.state = {
      isLoading: false,
    }

    this.buttonAnimated = new Animated.Value(0)
    this.growAnimated = new Animated.Value(0)
    this._onPress = this._onPress.bind(this)
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    })
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <ActivityIndicator size="large"
                color={colors.primary}
              />
            ) : (
                <Text style={styles.text}>{this.props.message}</Text>
              )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    top: -DEVICE_HEIGHT * 0.15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 20,
    height: MARGIN,
    justifyContent: 'center',
    zIndex: 100,
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    borderRadius: 100,
    borderWidth: 1,
    height: MARGIN,
    marginTop: -MARGIN,
    width: MARGIN,
    zIndex: 99,
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.white,
  },
})
