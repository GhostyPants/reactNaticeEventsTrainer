import React, { Component } from 'react'
import { FlatList, StyleSheet, TouchableHighlight, View, Text } from 'react-native'

import EventCard from './EventCard'

class EventList extends Component {
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
    console.log('Pressed')
  }

  render() {
    return (
      <View style={[styles.container, styles.list]}>
        <FlatList 
          style={styles.list}
          data={ this.state.events }
          renderItem={ ({ item }) => <EventCard event={item}/> }
          keyExtractor={ item => item.id }
        />
        <TouchableHighlight onPress={this.handleAddPress}>
         <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    margin: 20,
    backgroundColor: 'black'
  }
})

export default EventList