import React from 'react'
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import SettingsList from 'react-native-settings-list'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { TagSelect } from 'react-native-tag-select'
import {
  colors,
  dimensionsDevice,
  roundButton
} from '../../styles'

import ImgBackgroundDevice from '../../../assets/devicebackground.jpg'
import IconMorning from '../../../assets/morning.png'
import IconEvening from '../../../assets/night.png'
import IconCalendar from '../../../assets/calendar.png'

const WEEKDAYS = [
  { id: 1, label: 'SU' },
  { id: 2, label: 'MO' },
  { id: 3, label: 'TU' },
  { id: 4, label: 'WE' },
  { id: 5, label: 'TH' },
  { id: 6, label: 'FR' },
  { id: 7, label: 'SA' },
];

export default class AlarmScreen extends React.Component {
  static navigationOptions = {
    title: 'SmartWindows',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  constructor() {
    super()

    this.state = {
      isTimePickerVisible: false,
      openTime: '00:00',
      closeTime: '00:00',
      activeAlarm: false,
      activeTemperature: false,
      openClose: 1, //Open : 1, Close: 2
      days: [],
    }
  }

  _handleDatePicked = (date) => {
    if (this.state.openClose == 1) {
      this.setState({
        openTime: `${date.getHours()}:${date.getMinutes()}`
      })
    } else {
      this.setState({
        closeTime: `${date.getHours()}:${date.getMinutes()}`
      })
    }
    this._hideTimePicker()
  }

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false })

  _showTimePicker = (OpenClose) => this.setState({ isTimePickerVisible: true, openClose: OpenClose })

  _onActiveAlarm = () => {
    const { activeAlarm } = this.state
    this.setState({
      activeAlarm: !activeAlarm
    })
  }

  _onActiveTemperature = () => {
    const { activeTemperature } = this.state
    this.setState({
      activeTemperature: !activeTemperature
    })
  }

  _onSubmit = () => {
    let days = []
    this.tag.itemsSelected.map((item) => {
      days.push(item.id - 1)
    })
    this.setState({
      days: days
    })
    console.log(days)
    Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected))
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackgroundDevice}>
        <SettingsList borderColor={colors.tertiary} defaultItemSize={50}>
          <SettingsList.Header headerStyle={{ marginTop: 15 }} />
          <SettingsList.Item
            hasNavArrow={false}
            hasSwitch={true}
            title='Automatic Open'
            titleInfo='Temperature'
            switchOnValueChange={this._onActiveTemperature}
            switchState={this.state.activeTemperature}
          />
          <SettingsList.Item
            hasNavArrow={false}
            hasSwitch={true}
            icon={
              <Image style={styles.imageStyle} source={IconCalendar} />
            }
            title='Automatic Open'
            titleInfo='Alarm'
            switchOnValueChange={this._onActiveAlarm}
            switchState={this.state.activeAlarm}
          />
          <SettingsList.Header headerStyle={{ marginTop: 15 }} headerText='Alarm Configure' />
          <SettingsList.Item
            icon={
              <Image style={styles.imageStyle} source={IconMorning} />
            }
            title='Open at: '
            titleInfo={this.state.openTime}
            onPress={() => this._showTimePicker(1)}
          />
          <SettingsList.Item
            icon={
              <Image style={styles.imageStyle} source={IconEvening} />
            }
            title='Close at: '
            titleInfo={this.state.closeTime}
            onPress={() => this._showTimePicker(2)}
          />
        </SettingsList>
        <View style={styles.buttonsContainer}>
          <Text style={styles.labelText}>Days: </Text>
          <TagSelect
            data={WEEKDAYS}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}
            ref={(tag) => {
              this.tag = tag
            }}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1}
            onPress={this._onSubmit}
          ><Text style={styles.text}>Submit</Text></TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideTimePicker}
          mode='time'
          is24Hour={true}
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
  imageStyle: {
    alignSelf: 'center',
    height: 30,
    marginLeft: 15,
    width: 30
  },
  buttonsContainer: {
    top: '-32%',
  },
  labelText: {
    color: colors.secondary2,
    fontSize: dimensionsDevice.width * 0.08,
    fontWeight: '500',
    marginBottom: 15,
  },
  item: {
    backgroundColor: colors.white,
    borderColor: colors.secondary4,
    borderWidth: 1,
  },
  label: {
    color: colors.black
  },
  itemSelected: {
    backgroundColor: colors.tertiary4,
  },
  labelSelected: {
    color: colors.white,
  },
  button: {
    ...roundButton,
    backgroundColor: colors.tertiary,
    borderColor: colors.tertiary,
    height: 40,
    width: dimensionsDevice.width * 0.9,
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.white,
  },
});
