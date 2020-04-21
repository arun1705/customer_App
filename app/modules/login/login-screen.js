import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Image, StatusBar, View, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { TextInput as TextInputPaper, Button, Avatar, Card, Title, Paragraph, HelperText } from 'react-native-paper'
// import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './login-screen.styles'
import { Images, Metrics, Colors } from '../../shared/themes'
import LoginActions from './login.reducer'
import colors from '../../shared/themes/colors'
import { validateEmail } from '../../shared/res/Validate'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
class LoginScreen extends React.Component {
  static contextType = NetworkContext

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func,
  }

  constructor(props) {
    super(props)
    // Navigation.events().bindComponent(this)
    this.userNameErrorMsg = ''
    this.passwordErrorMsg = ''
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth },
      refresh: true,
    }
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }

  componentDidUpdate(prevProps) {
    if (!this.props.fetching) {
      if (prevProps.fetching && this.props.error) {
        Alert.alert('Error', this.props.error, [{ text: 'OK' }])
      }
      if (!prevProps.account && this.props.account) {
        this.navtoHome()
      }
    }
  }
  signUp = () => {
    this.props.navigation.navigate('Register')
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    // attempt a login - a saga is listening to pick it up from here.
    this.validation = true

    if (username === '') {
      this.userNameErrorMsg = 'Please enter Email ID'
      this.validation = false
    } else if (!validateEmail(username)) {
      this.userNameErrorMsg = 'Email ID is not valid'
      this.validation = false
    }

    if (password === '') {
      this.passwordErrorMsg = 'Please enter password'
      this.validation = false
    } else if (password !== '' && password.length <= 3) {
      this.passwordErrorMsg = 'Password must be greater than 4 charaters'
      this.validation = false
    }

    if (this.validation) {
      this.props.attemptLogin(username, password)
    } else {
      this.refresh()
    }
  }
  handlePressCancel = () => {
    this.props.logout()
    // Navigation.dismissModal(this.props.componentId)
  }

  handleChangeUsername = text => {
    this.setState({ username: text })
  }

  handleChangePassword = text => {
    this.setState({ password: text })
  }

  navtoHome = () => {
    this.props.navigation.navigate('Auth')
  }

  validate_field = () => {
    const { username, password } = this.state
    if (username == '') {
      alert('please fill user name!')
      return false
    } else if (password == '') {
      alert('please fill password')
      return false
    }
    return true
  }

  render() {
    return (
      <ScrollView style={[styles.container]} keyboardShouldPersistTaps="always">
        {this.context.isInternetReachable ? (
          <>
            <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
            <View style={styles.box}>
              <View style={styles.innerbox}>
                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Email Id"
                    maxLength={75}
                    onChangeText={username => {
                      this.userNameErrorMsg = ''

                      this.setState({ username })
                    }}
                    error={this.userNameErrorMsg}
                    value={this.state.username}
                    onSubmitEditing={() => {
                      this.secondTextInput.focus()
                    }}
                    blurOnSubmit={false}
                  />
                  <HelperText type="error" visible={!this.validation}>
                    {this.userNameErrorMsg}
                  </HelperText>
                </View>

                <View style={styles.row}>
                  <TextInputPaper
                    ref={input => {
                      this.secondTextInput = input
                    }}
                    underlineColor="green"
                    mode="outlined"
                    maxLength={75}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={password => {
                      this.passwordErrorMsg = ''
                      this.setState({ password })
                    }}
                    error={this.passwordErrorMsg}
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Password"
                    value={this.state.password}
                  />
                  <HelperText type="error" visible={!this.validation}>
                    {this.passwordErrorMsg}
                  </HelperText>
                </View>
                <View style={[styles.row]}>
                  <Button
                    mode="contained"
                    // disabled={!this.context.isConnected || this.props.fetching}
                    uppercase="false"
                    color={Colors.background}
                    style={styles.buttonWrapper}
                    onPress={this.handlePressLogin}>
                    <Text style={styles.buttonText}>Log In</Text>
                  </Button>
                </View>

                {/* {!fetching ? (
              <View style={[styles.row]}>
                <Button
                  mode="contained"
                  uppercase="false"
                  color={Colors.background}
                  style={styles.buttonWrapper}
                  onPress={this.handlePressLogin}>
                  <Text style={styles.buttonText}>Log In</Text>
                </Button>
              </View>
            ) : (
              <View style={[styles.row]}>
                  <ActivityIndicator size="small" />
              </View>
            )} */}
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
              <View style={[styles.loginRow]}>
                <Text style={styles.Text}>Not a member?</Text>
              </View>
              <View style={[styles.loginRow]}>
                <TouchableOpacity onPress={this.signUp}>
                  <Text style={styles.SignUpText}> Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <NetWork />
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.account.account,
    fetching: state.login.fetching,
    error: state.login.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    logout: () => dispatch(LoginActions.logoutRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)
