import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import IconHot from '../../../assets/hot.jpg';
import IconCold from '../../../assets/cold.png';

class ListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.index)
  }

  render() {
    const { item } = this.props
    const { temperature } = item

    return (
      <TouchableHighlight
        onPress={this._onPress}
        underlayColor='#DDDDDD'
      >
        <View style={styles.rowContainer}>
          {temperature > 20 ? (
            <Image style={styles.thumbnail} source={IconHot} />
          ) : (
            <Image style={styles.thumbnail} source={IconCold} />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.price}>{temperature}</Text>
            <Text style={styles.title}>{item.humidity}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default class SearchResults extends React.Component {
  static navigationOptions = {
    title: 'Environment'
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
    const { params } = this.props.navigation.state
    return (
      <FlatList
        data={params.listing}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 80,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});
