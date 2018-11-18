import React, { Component } from 'react'
import { FlatList, StyleSheet, TouchableHighlight, View, Text } from 'react-native'

import ActionButton from 'react-native-action-button'

import EventCard from './EventCard'

class EventList extends Component {
  static navigationOptions = {
    title: 'Your Events',
  }

  state = {
    events: []
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      })
    }, 1000)

    const events = require('./db.json').events.map( e => ({
      ...e,
      date: new Date(e.date)
    }))
    this.setState({ events })
  }

  handleAddPress = () => {
    this.props.navigation.navigate('form')
  }

  render() {
    return [
      <FlatList 
        key='flatList'
        style={styles.list}
        data={ this.state.events }
        renderItem={ ({ item }) => <EventCard event={item}/> }
        keyExtractor={ item => item.id }
      />,
      <ActionButton key='fab' onPress={this.handleAddPress} buttonColor='rgba(231, 76, 60, 1)'/>
    ]
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingTop: 10
  }
})

export default EventList