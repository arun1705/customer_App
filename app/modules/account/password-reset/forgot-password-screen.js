import React from 'react'
import { Alert, View, ScrollView, StatusBar, Text } from 'react-native'
import { connect } from 'react-redux'
import { TextInput as TextInputPaper, Button } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import colors from '../../../shared/themes/colors'
import { HelperText, TextInput } from 'react-native-paper'

import ForgotPasswordActions from './forgot-password.reducer'
import styles from './forgot-password-screen.styles'
import { validateEmail } from '../../../shared/res/Validate'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
class ForgotPasswordScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.emailErrorMsg = ''
    this.state = {
      email: '',
      refresh: true,
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm() {
    const { email } = this.state
    this.validation = true
    if (email === '') {
      this.emailErrorMsg = 'Please Enter Email ID'
      this.validation = false
    } else if (!validateEmail(email)) {
      this.emailErrorMsg = 'Email ID  is not valid'
      this.validation = false
    }
    if (this.validation) {
      this.props.resetPassword(email)
    } else {
      this.refresh()
    }
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching) {
      if (this.props.error) {
        Alert.alert('Error', this.props.error, [{ text: 'OK' }])
      } else {
        Alert.alert('Success', 'Password reset email sent', [{ text: 'OK', onPress: () => this.props.navigation.navigate('Login') }])
        //Navigation.popToRoot(this.props.componentId)
      }
    }
  }

  formChange(newValue) {
    this.setState({
      formValue: newValue,
    })
  }

  render() {
    return (
      <>
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
                      maxLength={75}
                      theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                      label="Email ID"
                      onChangeText={email => {
                        this.emailErrorMsg = ''
                        this.setState({ email })
                      }}
                      value={this.state.email}
                      error={this.emailErrorMsg}
                    />
                    <HelperText type="error" visible={!this.validation}>
                      {this.emailErrorMsg}
                    </HelperText>
                  </View>

                  <View style={[styles.row]}>
                    <Button
                      mode="contained"
                      // disabled={!this.context.isConnected || this.props.fetching}
                      uppercase="false"
                      color={Colors.background}
                      onPress={this.submitForm}>
                      <Text style={styles.buttonText}>RESET</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <NetWork />
          )}
        </ScrollView>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.forgotPassword.fetching,
    error: state.forgotPassword.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: email => dispatch(ForgotPasswordActions.forgotPasswordRequest(email)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen)
