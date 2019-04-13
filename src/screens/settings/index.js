import React from 'react'
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import {
  colors,
  dimensionsDevice
} from '../../styles'
import SettingsList from 'react-native-settings-list'

import ImgBackgroundSettings from '../../../assets/settingsbackground.jpg'
import ImgUserAvatar from '../../../assets/thanos.jpg'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackgroundSettings}>
        <Image source={ImgUserAvatar} style={styles.avatarImage} />
        <SettingsList borderColor={colors.tertiary} defaultItemSize={50}>
          <SettingsList.Item
            isAuth={true}
            authPropsUser={{ placeholder: 'User', value: global.username }}
            authPropsPW={{ placeholder: 'Password', value: global.password }}
            onPress={() => alert("Cambio de parametros")}
          />
        </SettingsList>
        <Button
          title='Logout'
          onPress={() => this.props.navigation.navigate('Login')}
          color={colors.error}
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
  avatarImage: {
    alignSelf: 'center',
    borderRadius: (dimensionsDevice.width * 0.25) / 2,
    height: dimensionsDevice.width * 0.25,
    marginTop: 2,
    width: dimensionsDevice.width * 0.25,
  },
  imageStyle: {
    alignSelf: 'center',
    height: 30,
    marginLeft: 15,
    width: 30
  },
  titleInfoStyle: {
    color: '#8e8e93',
    fontSize: 16,
  },
});
