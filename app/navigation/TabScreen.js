import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompletedOrder from '../modules/order/completed-order/completed-order'
import CreateOrder from '../modules/order/create-order/create-order'
import ProfileScreen from '../navigation/ProfileScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from 'react-native-elements'
import colors from '../shared/themes/colors'

export class TabScreen extends Component {
  render() {
    const Tab = createMaterialBottomTabNavigator()
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'UPCOMING') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            } else if (route.name === 'COMPLETED') {
              iconName = focused ? 'rowing' : 'sc-telegram'
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} type="ionicon" />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
        barStyle={{ backgroundColor: colors.background }}>
        <Tab.Screen name="HOME" component={ProfileScreen} />
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabScreen)
