import React, { Component } from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default class EventForm extends Component {
  static navigationOptions = {
    title: 'Add Events',
  }

  handleAddPress = () => {
    console.log('Button pressed on form')
    this.props.navigation.navigate('list')
  }
  
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
