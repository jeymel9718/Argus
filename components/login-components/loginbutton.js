import React from 'react'
import Dimensions from 'Dimensions'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Easing,
    Alert,
    Animated,
    View,
    ActivityIndicator,
} from 'react-native'

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
                this.props.navigation.navigate('Home')
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
                                color = 'blue'
                            />
                        ) : (
                                <Text style={styles.text}>LOGIN</Text>
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
        flex: 1,
        top: -DEVICE_HEIGHT * 0.15,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00949e',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#00949e',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#00949e',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
})