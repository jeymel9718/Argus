import React from 'react'
import {
    Button,
    FlatList,
    StyleSheet,
    View,
    Text,
    Switch,
    Image,
    TouchableHighlight,
} from 'react-native'

export default class DeviceScreen extends React.Component{

    constructor(){
        super()

        this.state = {
            open: true,
        }
    }

    _onOpenChange = () => {
        let open = this.state.open
        this.setState({
            open: !open
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Ventana de la cocina</Text>
                <View style={styles.containerInline}>
                    <Text style={styles.description}>Estado</Text>
                    <Switch
                        style={styles.switch}
                        value={this.state.open}
                        trackColor={{false:'red',true:'green'}}
                        onValueChange={this._onOpenChange}
                    />
                    
                </View>
                <View style={styles.containerInline}>
                    <Text style={styles.description}>Temperatura: </Text>
                    <Text style={styles.textValue}>23.5</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerInline:{
        flex: 1,
        flexDirection: 'row',
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        color: '#656565',
        textAlign: 'left',
      },
      textValue: {
        marginBottom: 20,
        fontSize: 18,
        color: '#656565',
        textAlign: 'center',
      },
    switch:{
        alignSelf: 'center',
    },
    title:{
        marginBottom: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
})