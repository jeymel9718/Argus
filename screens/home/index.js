import React from 'react'
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'

const DATA = [
  {
    id: 1,
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADc3NxLS0swMDDo6Ojy8vKysrJUVFT29vavr69QUFBOTk7Hx8d/f3/KysrQ0NBAQECKiorX19cnJydXV1d5eXkODg7u7u4VFRVhYWGVlZW5ubmgoKCnp6ccHByFhYVsbGyYmJgpQtgLAAAEDklEQVR4nO3de1OqUBTGYbDkpiDe0My89P0/5EGt0wL2gg25YG96f/91opn9zOuMcYbKcRBCCCGEkAUdw6FPIFp4dFz3MFpkeDy4bi7M2/re0Kd5ep6/vdsewrxZNCakF82+Yf+FeUE0jpdrGAVERYWjWJKspxTelvTtXTL0g4qnKrR2ycp6NUILl1StVy+8I21Z0mN59UJLluTX0xG6t28GTEaGX2/rvxEavGTTevpC18QlNdZrJXTNWlJvvbZC15QltdfrIHSHfwupfWN4ijDvdcjaH7eD0LJKwt0wp3hqJUNJ6KRJf0cRKUnLpNKHeRYjc15e8d8UQluRD56m8IbM+jvbE8rSn6MXP8MK8xa2ILNF4dzFT9YJ7UCWeG2FpiOrvA7CvNhMZBarj1u8Skt4Q157O7heV4bXWZi37O/4jS3rDlq8tIXwpT9AYy89COP9tM/2ce/CSd2lAk0g/AlCNghlg5AEIRuEskFIgpANQtkgJEHIBqFsEJIgZINQNghJELJBKBuEJAjZIJQNQhKEbBDKBiHpjwuvH/GU+0IrhNP441orvPeaneJ99YsNF+7jU6Z6SJp/CvolOaUFp7HCfXpK+Edhmp7znidR6hkr9NIomTcItJ5kP89X0dop/nTfsMKZs45W87PO4Ts/qz+ssEUQQgghhBBCCGFFqP+ks7nCkqFyfziNP68bS4Wb6+ft5q9BeC+cHN8P9U6zhJvD+3Hy/UPKOsKv1v5q9ma48G228tfFS1sI7+3zOxTFLw0xQDjL7+wUd+od/59mvzgVX7XDCjenhcr2qJswr3irOaxwXndpZ6GB9/jqIGSDUDYISRCyQSgbhCQI2SCUDUIShGwQygYhCUI2CGWDkAQhG4SyQUiCkA1C2SAkQcgGoWwQkiBkg1A2CEkQskEoG4QkCNkglA1CEoRsEMoGIQlCNghlg5AEIRuEskFIgpANQtkgJEHIBqFsEJIgZINQNghJELJBKBuEJAjZIJQNQhKEbBDKBiEJQra/Jhz/3+UeNhnhsj9AY8vnCxdZf8fXKls8U2gc7xGHLF7VLEzN5D3K0t8K02TX33E7tUsqyOIFdcL00t9Bf9Ul7SJcX7R+a70hnS/rdsL1yvQXZ7Xdaq0rnKxsWo92Xk2ahZN3nV8ibG6b90m90G7eo5LBUV81ojoIX4dMXhj4nuK7iP7y/EBSuPXD5jOIF/pbGWFgBO9R2GJJTaEZ69G0l9QRmrQeTW/JRqF569E0lqwXmroerWnJGuHQbwz61b6FcEIb1qPxSyqFs8iW9WhepPgTDiqhbevRVEuWhHauR6ssSYVBZO96tDAKVMK59evRvGheFNr/4qz2/XJ1xrYe7b6kc+L/XssY2p+GPgFCCCGEENLpHxQSXumUDwmbAAAAAElFTkSuQmCC'
  },
  {
    id: 2,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlm12DRWsI3jpJXRjtZQXaKfjjXSjh5R3EU6eV_QrSToc4pvpyNw'
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
          <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Log out"
          color="#1771eb"
        />
      )
    }
  }

  _onPressItem = (index) => {
    if (index === 0) {
      this.props.navigation.navigate('Device')
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
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this._renderItem}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageThumbnail: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  }
})