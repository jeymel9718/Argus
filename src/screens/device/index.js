import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import SettingsList from 'react-native-settings-list'
import { colors } from '../../styles'

import ImgBackgroundDevice from '../../../assets/devicebackground.jpg'
import IconWindow from '../../../assets/window.png'
import IconTemperature from '../../../assets/thermometer.png'
import IconHumidity from '../../../assets/humidity.png'
import IconCalendar from '../../../assets/calendar.png'

export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'SmartWindows',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  constructor() {
    super();
    this.state = {
      window1Value: false,
      window2Value: false,
    }
  }

  _onWindow1ValueChange = () => {
    const { window1Value } = this.state
    this.setState({ window1Value: !window1Value })
  }

  _onWindow2ValueChange = () => {
    const { window2Value } = this.state
    this.setState({ window2Value: !window2Value })
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackgroundDevice}>
        <SettingsList borderColor={colors.tertiary} defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.headerText} headerText='Windows Control' />
          <SettingsList.Item
            hasNavArrow={false}
            hasSwitch={true}
            icon={
              <Image style={styles.imageStyle} source={IconWindow} />
            }
            switchOnValueChange={this._onWindow1ValueChange}
            switchState={this.state.window1Value}
            title='Window 1'
          />
          <SettingsList.Item
            hasNavArrow={false}
            hasSwitch={true}
            icon={
              <Image style={styles.imageStyle} source={IconWindow} />
            }
            switchOnValueChange={this._onWindow2ValueChange}
            switchState={this.state.window2Value}
            title='Window 2'
          />
          <SettingsList.Item
            hasNavArrow={true}
            icon={
              <Image style={styles.imageStyle} source={IconCalendar} />
            }
            titleInfo='Configure windows alarm'
            title='Alarm'
            onPress={() => this.props.navigation.navigate('Alarm')}
          />
          <SettingsList.Header headerStyle={styles.headerText} headerText='Weather' />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={IconTemperature} />}
            title='Temperature'
            titleInfo='25.20 °C'
            titleInfoStyle={styles.titleInfoStyle}
          />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={IconHumidity} />}
            title='Humidity'
            titleInfo='50%'
            titleInfoStyle={styles.titleInfoStyle}
          />
        </SettingsList>
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
  headerText: {
    color: colors.tertiary4,
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 15,
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
  }
});
