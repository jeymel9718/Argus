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
      temperature: '25.0',
      humidity: '15',
    }
    setInterval(this._getEnvironmentVariables,60000)
  }

  _getEnvironmentVariables = async () => {
    const response = await fetch(`http://${global.IpAddress}:8080/api/v1/environments/last`)
    const json = await response.json()
    this.setState({
      temperature: json.temperature,
      humidity: json.humidity
    })
  }

  _onWindow1ValueChange = async () => {
    const { window1Value } = this.state
    var windowstate = 0
    if (!window1Value === true) {
      windowstate = 1
    } else {
      windowstate = 0
    }
    const response = await fetch(`http://${global.IpAddress}:8080/api/v1/windows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        window: 1,
        state: windowstate
      }),
    })
    const json = await response.json()
    console.log(json)
    this.setState({ window1Value: !window1Value })
  }

  _onWindow2ValueChange = async () => {
    const { window2Value } = this.state
    var windowstate = 0
    if (!window2Value === true) {
      windowstate = 1
    } else {
      windowstate = 0
    }
    const response = await fetch(`http://${global.IpAddress}:8080/api/v1/windows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        window: 2,
        state: windowstate
      }),
    })
    const json = await response.json()
    console.log(json)
    this.setState({ window2Value: !window2Value })
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackgroundDevice}>
        <SettingsList borderColor={colors.tertiary} defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.headerText} headerText='Windows Control' />
          <SettingsList.Item
            hasNavArrow={true}
            hasSwitch={true}
            icon={
              <Image style={styles.imageStyle} source={IconWindow} />
            }
            switchOnValueChange={this._onWindow1ValueChange}
            switchState={this.state.window1Value}
            title='Window 1'
            onPress={() => this.props.navigation.navigate('Alarm',{window: 1})}
          />
          <SettingsList.Item
            hasNavArrow={true}
            hasSwitch={true}
            icon={
              <Image style={styles.imageStyle} source={IconWindow} />
            }
            switchOnValueChange={this._onWindow2ValueChange}
            switchState={this.state.window2Value}
            title='Window 2'
            onPress={() => this.props.navigation.navigate('Alarm',{window:2})}
          />
          <SettingsList.Header headerStyle={styles.headerText} headerText='Weather' />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={IconTemperature} />}
            title='Temperature'
            titleInfo={`${this.state.temperature} °C`}
            titleInfoStyle={styles.titleInfoStyle}
          />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={IconHumidity} />}
            title='Humidity'
            titleInfo={`${this.state.humidity}%`}
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
