import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, StatusBar, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
// import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import styles from './launch-screen.styles'
import { Images, Metrics } from '../../shared/themes'
import { Button } from 'react-native-paper'
import colors from '../../shared/themes/colors'
import SplashScreen from 'react-native-splash-screen'

export default class LaunchScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    SplashScreen.hide()
  }

  signIn = () => {
    this.props.navigation.push('Guest', { screen: 'Login' })
  }

  signUp = () => {
    this.props.navigation.push('Guest', { screen: 'Register' })
  }

  forgotPassword = () => {
    this.props.navigation.push('Guest', { screen: 'ForgotPassword' })
  }

  render() {
    console.disableYellowBox = true
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <StatusBar backgroundColor={colors.snow} barStyle="light-content" />

        <View style={styles.viewStyle}>
          <Text style={styles.recycleText}>Encash My Trash</Text>
          <Text style={styles.tagLineText}>Gives Value to Trash</Text>
        </View>

        <View>
          <Image source={Images.home} style={styles.centerLogo} />
        </View>

        <View style={[styles.loginRow]}>
          <Button mode="contained" uppercase="false" style={styles.loginButton} onPress={this.signUp}>
            <Text style={styles.loginText}>Register</Text>
          </Button>
        </View>

        <View style={styles.forgotContainer}>
          <View style={[styles.loginRow]}>
            <TouchableOpacity onPress={this.forgotPassword}>
              <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.loginRow]}>
            <Text style={styles.Text}>Already a member?</Text>
            <TouchableOpacity onPress={this.signIn}>
              <Text style={styles.SignUpText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}
