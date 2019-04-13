import React from 'react'
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  colors,
  dimensionsDevice
} from '../../styles'


import ImgHomeBackground from '../../../assets/homebackground.jpg'

const DATA = [
  {
    id: 1,
    src: require('../../../assets/windows.gif')
  },
  {
    id: 2,
    src: require('../../../assets/settings.gif')
  }
]

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index)
  }

  render() {
    const { item } = this.props
    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#DDDDDD'
      >
        <View style={styles.columnContainer}>
          <Image style={styles.image} source={item.src} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  _onPressItem = async (index) => {
    if (index === 0) {
      try {
        const response = await fetch(`http://${global.IpAddress}:8080/api/v1/windows`)
        const json = await response.json()
        this.props.navigation.navigate('Device', { windowsState: json })
      } catch (error) {
        alert(error)
      }
    } else if (index === 1) {
      this.props.navigation.navigate('Settings')
    }
  }

  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        index={index}
        onPressItem={this._onPressItem}
      />
    )
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgHomeBackground}>
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={this._renderItem}
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: dimensionsDevice.height * 0.15,
    height: dimensionsDevice.height * 0.15,
  },
  columnContainer: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 24,
    flex: 1,
    height: dimensionsDevice.width * 0.30,
    justifyContent: 'center',
    margin: dimensionsDevice.width * 0.05,
    shadowColor: colors.black,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    width: dimensionsDevice.width * 0.40,
  }
})
