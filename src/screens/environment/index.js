import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  colors,
  dimensionsDevice
} from '../../styles'
import IconHot from '../../../assets/hot.jpg'
import IconCold from '../../../assets/cold.png'

class ListItem extends React.PureComponent {

  render() {
    const { item } = this.props
    const { temperature } = item
    const date = new Date(item.date)

    return (
      <TouchableHighlight
        underlayColor='#DDDDDD'
      >
        <View style={styles.rowContainer}>
          {temperature > 20 ? (
            <Image style={styles.thumbnail} source={IconHot} />
          ) : (
              <Image style={styles.thumbnail} source={IconCold} />
            )}
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
            <Text style={styles.dateText}>Time: {date.getHours()}:{date.getMinutes()}</Text>
            <Text style={styles.environmentsText}>Temperature: {temperature} °C</Text>
            <Text style={styles.environmentsText}>Humidity: {item.humidity} %</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default class SearchResults extends React.Component {
  static navigationOptions = {
    title: 'Environment',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        index={index}
      />
    )
  }

  render() {
    const environments = this.props.navigation.getParam('environments', [])
    console.log(environments)
    return (
      <FlatList
        data={environments}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    height: dimensionsDevice.width * 0.30,
    marginRight: 10,
    width: dimensionsDevice.width * 0.30,
  },
  textContainer: {
    flex: 1,
  },
  dateText: {
    color: colors.tertiary4,
    fontSize: 20,
    fontWeight: 'bold',
  },
  environmentsText: {
    color: colors.secondary3,
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: colors.black,
    height: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  }
})
