import React from 'react'
import { Alert, View, ScrollView, StatusBar, Text, TouchableOpacity } from 'react-native'
import { TextInput as TextInputPaper, Button, HelperText } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import { connect } from 'react-redux'

import colors from '../../../shared/themes/colors'
import RegisterActions from '../register/register.reducer'
import styles from './register-screen.styles'
import { validateEmail, validateMobNum, validateMobNumLength } from '../../../shared/res/Validate'

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    // Navigation.events().bindComponent(this)
    this.mobileNoErrorMsg = ''
    this.submitUpdate = this.submitUpdate.bind(this)

    this.firstNameErrorMsg = ''
    this.lastNameErrorMsg = ''
    this.emailIdErrorMsg = ''
    this.state = {
      firstname: '',
      lastname: '',
      mobile: '',
      emailId: '',
      password: '',
      refresh: true,
    }
  }
  signIn = () => {
    this.props.navigation.navigate('Login')
  }

  submitUpdate() {
    const { mobile, emailId, firstname, lastname, password } = this.state

    this.validation = true

    if (mobile === '') {
      this.mobileNoErrorMsg = 'Please Enter Mobile No'
      this.validation = false
    } else if (!validateMobNumLength(mobile)) {
      this.mobileNoErrorMsg = 'Mobile No is not valid'
      this.validation = false
    } else if (!validateMobNum(mobile)) {
      this.mobileNoErrorMsg = 'Mobile No is not valid'
      this.validation = false
    }
    if (emailId === '') {
      this.emailIdErrorMsg = 'Please Enter Email ID'
      this.validation = false
    } else if (!validateEmail(emailId)) {
      this.emailIdErrorMsg = 'Please Enter valid Email ID'
      this.validation = false
    }

    if (firstname === '') {
      this.firstNameErrorMsg = 'Enter the  first name'
      this.validation = false
    } else if (firstname.length <= 2) {
      this.firstNameErrorMsg = 'First name should be of atleast three character'
      this.validation = false
    }
    if (lastname === '') {
      this.lastNameErrorMsg = 'Enter the last name'
      this.validation = false
    } else if (lastname.length <= 2) {
      this.lastNameErrorMsg = 'Last name should be of atleast three character'
      this.validation = false
    }
    if (password === '') {
      this.passwordErrorMsg = 'Enter the Password'
      this.validation = false
    } else if (password.length < 6) {
      this.passwordErrorMsg = 'Password should be minimum six characters'
      this.validation = false
    }

    if (this.validation) {
      // alert("success")
      const userDetail = { firstName: firstname, lastName: lastname, mobile: mobile, loginId: emailId, password: password }
      console.log('val', userDetail)
      this.props.register(userDetail)
      // }
    } else {
      this.refresh()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching) {
      if (this.props.error) {
        Alert.alert('Error', this.props.error, [{ text: 'OK' }])
      } else {
        // Navigation.popToRoot(this.props.componentId)
        Alert.alert('Registration Successful', 'Account has been successfully created, kindly check your email to activate your account', [
          { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
        ])
      }
    }
  }
  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }
  accountChange(newValue) {
    this.setState({
      accountValue: newValue,
    })
  }

  handlePressRegister = () => {
    if (this.validate_field()) {
      const { username, password } = this.state
      // attempt a login - a saga is listening to pick it up from here.
      this.props.register(username, password)
    }
  }

  validate_field = () => {
    const { firstname, lastname, password } = this.state
    // if (firstname == '') {
    //   alert('please fill first name!')
    //   return false
    // } else if (lastname == '') {
    //   alert('please fill last name!')
    //   return false
    // } else if (password == '') {
    //   alert('please fill password!')
    //   return false
    // }
    // return true
  }

  render() {
    return (
      <ScrollView style={[styles.container]} keyboardShouldPersistTaps="always">
        <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />

        <View style={styles.box}>
          <View style={styles.innerbox}>
            <View style={styles.row}>
              <TextInputPaper
                underlineColor="green"
                mode="outlined"
                autoCapitalize="none"
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="First Name"
                onChangeText={firstname => {
                  this.firstNameErrorMsg = ''

                  this.setState({ firstname })
                }}
                maxLength={75}
                value={this.state.firstname}
                error={this.firstNameErrorMsg}
                onSubmitEditing={() => {
                  this.secondTextInput.focus()
                }}
                blurOnSubmit={false}
              />
              {this.validation && this.firstNameErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.firstNameErrorMsg}
                </HelperText>
              )}
            </View>

            <View style={styles.row}>
              <TextInputPaper
                ref={input => {
                  this.secondTextInput = input
                }}
                underlineColor="green"
                mode="outlined"
                autoCapitalize="none"
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="Last Name"
                maxLength={75}
                onChangeText={lastname => {
                  this.lastNameErrorMsg = ''
                  this.setState({ lastname })
                }}
                value={this.state.lastname}
                error={this.lastNameErrorMsg}
                onSubmitEditing={() => {
                  this.thirdTextInput.focus()
                }}
                blurOnSubmit={false}
              />
              {this.validation && this.lastNameErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.lastNameErrorMsg}
                </HelperText>
              )}
            </View>

            <View style={styles.row}>
              <TextInputPaper
                ref={input => {
                  this.thirdTextInput = input
                }}
                underlineColor="green"
                mode="outlined"
                keyboardType="numeric"
                maxLength={10}
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="Mobile"
                onChangeText={mobile => {
                  this.mobileNoErrorMsg = ''
                  this.setState({ mobile })
                }}
                value={this.state.mobile}
                error={this.mobileNoErrorMsg}
                onSubmitEditing={() => {
                  this.fourthTextInput.focus()
                }}
                blurOnSubmit={false}
              />
              {this.validation && this.mobileNoErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.mobileNoErrorMsg}
                </HelperText>
              )}
            </View>

            <View style={styles.row}>
              <TextInputPaper
                ref={input => {
                  this.fourthTextInput = input
                }}
                underlineColor="green"
                mode="outlined"
                maxLength={75}
                autoCapitalize="none"
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="Email Id"
                onChangeText={emailId => {
                  this.emailIdErrorMsg = ''
                  this.setState({ emailId })
                }}
                value={this.state.emailId}
                error={this.emailIdErrorMsg}
                onSubmitEditing={() => {
                  this.fifthTextInput.focus()
                }}
                blurOnSubmit={false}
              />
              {this.validation && this.emailIdErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.emailIdErrorMsg}
                </HelperText>
              )}
            </View>

            <View style={styles.row}>
              <TextInputPaper
                ref={input => {
                  this.fifthTextInput = input
                }}
                underlineColor="green"
                mode="outlined"
                autoCapitalize="none"
                maxLength={75}
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="Password"
                secureTextEntry
                onChangeText={password => {
                  this.passwordErrorMsg = ''
                  this.setState({ password })
                }}
                value={this.state.password}
                error={this.passwordErrorMsg}
              />
              {this.validation && this.passwordErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.passwordErrorMsg}
                </HelperText>
              )}
            </View>

            <View style={[styles.buttonRow]}>
              <Button
                mode="contained"
                // disabled={this.props.fetching}
                uppercase="false"
                color={Colors.background}
                onPress={this.submitUpdate}>
                <Text style={styles.buttonText}>REGISTER</Text>
              </Button>
              <View style={styles.loginRowContainer}>
                <View style={[styles.loginRow]}>
                  <Text style={styles.Text}>By Registering I agree to</Text>
                </View>
                <View style={[styles.loginRow]}>
                  <TouchableOpacity onPress={this.signUp}>
                    <Text style={styles.SignUpText}> T&C's</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingBottom: 30 }}>
          <View style={[styles.loginRow]}>
            <Text style={styles.Text}>Already a User?</Text>
          </View>
          <View style={[styles.loginRow]}>
            <TouchableOpacity onPress={this.signIn}>
              <Text style={styles.SignUpText}> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.register.fetching,
    error: state.register.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: userDetail => dispatch(RegisterActions.registerRequest(userDetail)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen)
