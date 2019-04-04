import React from 'react'
import Dimensions from 'Dimensions'
import{
    StyleSheet,
    View,
    TextInput,
    Image
} from 'react-native'
import {colors} from '../../styles'

const DEVICE_WIDTH = Dimensions.get('window').width

export default class LoginInput extends React.Component{
    render(){
        return(
            <View style={styles.inputWrapper}>
                <Image source={this.props.source} style={styles.inlineImg}/>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    placeholderTextColor= "white"
                    underlineColorAndroid="transparent"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: colors.gray,
      width: DEVICE_WIDTH*0.9,
      height: '62%',
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: colors.white,
    },
    inputWrapper: {
      flex: 1,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: '6%',
      height: '35%',
      left: '10%',
      top: '15%',
    },
})
