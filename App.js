import { createStackNavigator, createAppContainer } from 'react-navigation'

import EventList from './components/EventList'
import EventForm from './components/EventForm'

const app = createStackNavigator({
  list: {
    screen: EventList,
  },
  form: {
    screen: EventForm,
  },
})

export default createAppContainer(app)
