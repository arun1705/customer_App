import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, TouchableOpacity } from 'react-native'
import LoginScreen from '../modules/login/login-screen'
import ForgotPasswordScreen from '../modules/account/password-reset/forgot-password-screen'
import RegisterScreen from '../modules/account/register/register-screen'
import AuthScreen from '../navigation/AuthScreen'
import LaunchScreen from '../modules/home/launch-screen'
import colors from '../shared/themes/colors'
import { CommonActions } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome'

const GuestStack = createStackNavigator()

function GuestScreen({ navigation }) {
  return (
    <GuestStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleAlign: 'center',

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <GuestStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: 'LOGIN',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            alignSelf: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={20} title="Info" style={{ marginLeft: 15 }} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <GuestStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          headerTitle: 'FORGOT PASSWORD',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={20} title="Info" style={{ marginLeft: 15 }} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <GuestStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: 'REGISTER',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={20} title="Info" style={{ marginLeft: 15 }} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </GuestStack.Navigator>
  )
}

export class StartScreen extends Component {
  render() {
    const StartStack = createStackNavigator()
    // alert(this.props.netInfo);
    return (
      <StartStack.Navigator headerMode="none">
        {this.props.account ? (
          <StartStack.Screen name="Auth" component={AuthScreen} />
        ) : (
          <>
            <StartStack.Screen name="Launch" component={LaunchScreen} />
            <StartStack.Screen name="Guest" component={GuestScreen} />
          </>
        )}
      </StartStack.Navigator>
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
)(StartScreen)
