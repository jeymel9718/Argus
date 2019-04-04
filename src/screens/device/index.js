import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Alert
} from 'react-native'
import SettingsList from 'react-native-settings-list'

import IconWindow from '../../../assets/window.png'
import IconTemperature from '../../../assets/thermometer.png'
import IconHumidity from '../../../assets/humidity.png'

export default class DeviceScreen extends React.Component {

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
      <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
        <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
          <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
            <SettingsList.Header headerStyle={{ marginTop: 15 }} headerText='Windows Control' />
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
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
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
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 15,
    alignSelf: 'center',
    height: 30,
    width: 30
  },
  titleInfoStyle: {
    fontSize: 16,
    color: '#8e8e93'
  }
});
