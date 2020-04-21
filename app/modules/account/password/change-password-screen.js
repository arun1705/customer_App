import React from 'react'
import { Alert, View, ScrollView, StatusBar, Text } from 'react-native'
import { connect } from 'react-redux'
import { TextInput as TextInputPaper, Button, HelperText } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import colors from '../../../shared/themes/colors'
import ChangePasswordActions from '../password/change-password.reducer'
import styles from './change-password-screen.styles'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
// import { validateEmail, validateMobNum, validateMobNumLength } from '../../../shared/res/Validate'

class ChangePasswordScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    // Navigation.events().bindComponent(this)
    this.mobileNoErrorMsg = ''
    this.submitForm = this.submitForm.bind(this)
    this.currentPassErrorMsg = ''
    this.newPasswordErrorMsg = ''
    this.currentPassword = ''
    this.confirmPasswordErrorMsg = ''
    this.newPassword = ''
    this.confirmPassword = ''
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      refresh: true,
    }
  }

  submitForm() {
    const { currentPassword, newPassword, confirmPassword } = this.state
    this.validation = true
    console.log(currentPassword)
    // alert(currentPassword)
    if (currentPassword === '') {
      this.currentPassErrorMsg = 'Enter the current Password'
      this.validation = false
    } else if (currentPassword.length <= 5) {
      this.currentPassErrorMsg = 'Password should be of atleast 6 character'
      this.validation = false
    }

    if (newPassword === '') {
      this.newPasswordErrorMsg = 'Enter the new Password'
      this.validation = false
    } else if (newPassword.length <= 5) {
      this.newPasswordErrorMsg = 'Password should be of atleast 6 character'
      this.validation = false
    }

    if (confirmPassword === '') {
      this.confirmPasswordErrorMsg = 'Enter the confirm Password'
      this.validation = false
    } else if (newPassword !== confirmPassword) {
      // Alert.alert('Error', 'Passwords did not match', [{ text: 'OK' }])
      this.confirmPasswordErrorMsg = 'Passwords do not match'
      // this.newPasswordErrorMsg = 'Passwords do not match'
      this.validation = false
    }

    if (this.validation) {
      this.props.changePassword(this.state.currentPassword, this.state.newPassword)
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
        Alert.alert('Success', 'Password changed', [
          { text: 'OK', onPress: () => this.setState({ currentPassword: '', newPassword: '', confirmPassword: '' }) },
        ])
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
                      label="Current Password"
                      onChangeText={currentPassword => {
                        this.currentPassErrorMsg = ''
                        this.setState({ currentPassword })
                      }}
                      value={this.state.currentPassword}
                      error={this.currentPassErrorMsg}
                    />
                    {this.validation ? null : (
                      <HelperText type="error" visible={!this.validation}>
                        {this.currentPassErrorMsg}
                      </HelperText>
                    )}
                  </View>

                  <View style={styles.row}>
                    <TextInputPaper
                      underlineColor="green"
                      mode="outlined"
                      autoCapitalize="none"
                      maxLength={75}
                      theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                      label="New Password"
                      onChangeText={newPassword => {
                        this.newPasswordErrorMsg = ''
                        this.setState({ newPassword })
                      }}
                      value={this.state.newPassword}
                      error={this.newPasswordErrorMsg}
                    />
                    {this.validation ? null : (
                      <HelperText type="error" visible={!this.validation}>
                        {this.newPasswordErrorMsg}
                      </HelperText>
                    )}
                  </View>

                  <View style={styles.row}>
                    <TextInputPaper
                      underlineColor="green"
                      mode="outlined"
                      maxLength={75}
                      autoCapitalize="none"
                      theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                      label="Confirm Password"
                      onChangeText={confirmPassword => {
                        this.confirmPasswordErrorMsg = ''
                        this.setState({ confirmPassword })
                      }}
                      value={this.state.confirmPassword}
                      error={this.confirmPasswordErrorMsg}
                    />
                    <HelperText type="error" visible={!this.validation}>
                      {this.confirmPasswordErrorMsg}
                    </HelperText>
                  </View>

                  <View style={[styles.row]}>
                    <Button
                      mode="contained"
                      disabled={this.props.fetching}
                      uppercase="false"
                      color={Colors.background}
                      style={styles.buttonWrapper}
                      onPress={this.submitForm}>
                      <Text style={styles.buttonText}>SUBMIT</Text>
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
    // {
    //   /* <TouchableHighlight testID="changePasswordSubmitButton" style={styles.button} onPress={this.submitForm} underlayColor="#99d9f4">
    //         <Text style={styles.buttonText}>Save</Text>
    //       </TouchableHighlight> */
    // }
  }
}

const mapStateToProps = state => {
  console.log('change-password', state)
  return {
    fetching: state.changePassword.fetching,
    error: state.changePassword.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePassword: (currentPassword, newPassword) => dispatch(ChangePasswordActions.changePasswordRequest(currentPassword, newPassword)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePasswordScreen)
