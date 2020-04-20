import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'


export default class CompletedOrder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
  size={40  }
/>
      </View>
    )
  }
}
