import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import DrawerScreen from './DrawerScreen'
import LogoutScreen from './LogoutScreen'

export class AuthScreen extends Component {
  render() {
    const Drawer = createDrawerNavigator()
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: 'green',
          marginTop: 30,
          itemStyle: { padding: 0, margin: 0 },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerTitleStyle: {
              fontWeight: '900',
            },
            drawerIcon: () => <Icon name="home" type="font-awesome" color="#17661e" size={22} />,
          }}
        />
        <Drawer.Screen
          name="Change Password"
          component={DrawerScreen}
          options={{ drawerIcon: () => <Icon name="key" type="font-awesome" color="#17661e" size={22} /> }}
        />
        <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{ drawerIcon: () => <Icon name="sign-out" type="font-awesome" color="#17661e" size={22} /> }}
        />
      </Drawer.Navigator>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthScreen)
