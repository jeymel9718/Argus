import React from 'react'
import {
  Button,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import { colors } from '../../styles'
import SettingsList from 'react-native-settings-list'

import ImgUserAvatar from '../../../assets/thanos.jpg'

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
        <View style={styles.containerImage}>
          <Image source={ImgUserAvatar} style={styles.avatarImage} />
        </View>
        <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Item
              isAuth={true}
              authPropsUser={{ placeholder: 'User', value: 'Thanos' }}
              authPropsPW={{ placeholder: 'Password', value: '123' }}
              onPress={() => alert("Cambio de parametros")}
            />
          </SettingsList>
          <Button
            title='Logout'
            onPress={()=> this.props.navigation.navigate('Login')}
            color={colors.error}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatarImage: {
    borderRadius: 70,
    height: '50%',
    width: '50%',
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
