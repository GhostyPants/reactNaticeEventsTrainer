import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import EventList from './EventList'
import EventForm from './EventForm'

const app = createStackNavigator({
  list: {
    screen: EventList,
  },
  form: {
    screen: EventForm,
  },
})

export default createAppContainer(app)
