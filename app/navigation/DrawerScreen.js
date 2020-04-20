import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import LoginActions from '../modules/login/login.reducer'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../shared/themes/colors'
import ChangePasswordScreen from '../modules/account/password/change-password-screen'
export class DrawerScreen extends Component {
  render() {
    const DrawerStack = createStackNavigator()
    return (
      <DrawerStack.Navigator>
        <DrawerStack.Screen
          name="Change Password"
          component={ChangePasswordScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              paddingHorizontal: 50,
              fontSize: 22,
              fontWeight: '400',
            },
            headerTitle: 'Change Password',
            headerLeft: () => (
              <View style={{ paddingHorizontal: 16 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-left" size={20} title="Info" style={{ marginLeft: 0 }} color="#fff" />
            </TouchableOpacity>
              </View>
            ),
          }}
        />
      </DrawerStack.Navigator>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerScreen)
