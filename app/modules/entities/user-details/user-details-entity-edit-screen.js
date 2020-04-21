import React from 'react'
import { Alert, ScrollView, TouchableHighlight, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import UserDetailActions from './user-details.reducer'
import UserDetailsActions from '../user-details/user-details.reducer'

import { TextInput as TextInputPaper, Button } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import colors from '../../../shared/themes/colors'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
import styles from './user-details-entity-edit-screen-style'

class UserDetailEntityEditScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.route.params.firstName,
      lastName: this.props.route.params.lastName,
      userId: this.props.route.params.userId,
      modifiedBy: this.props.account.id,
      isNewEntity: true,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
      } else {
        // eslint-disable-next-line no-undef
        Alert.alert('Success', 'Your details updated successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
      }
    }
  }

  submitUpdate = () => {
    const { firstName, lastName, userId, modifiedBy } = this.state
    const userDetail = { firstName: firstName, lastName: lastName, userId: userId, modifiedBy: modifiedBy }
    this.props.updateUserDetail(userDetail)
  }

  render() {
    return (
      <>
        <ScrollView style={[styles.container]} keyboardShouldPersistTaps="always">
          <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
          {this.context.isInternetReachable ? (
            <>
              <View style={styles.box}>
                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="First Name"
                    onChangeText={firstName => {
                      this.firstNameErrorMsg = ''

                      this.setState({ firstName })
                    }}
                    value={this.state.firstName}
                    error={this.firstNameErrorMsg}
                  />
                </View>

                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Last Name"
                    onChangeText={lastName => {
                      this.lastNameErrorMsg = ''
                      this.setState({ lastName })
                    }}
                    value={this.state.lastName}
                    error={this.lastNameErrorMsg}
                  />
                </View>

                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    keyboardType="numeric"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Login Id"
                    onChangeText={mobile => {
                      this.mobileNoErrorMsg = ''
                      this.setState({ mobile })
                    }}
                    disabled="true"
                    value={this.props.route.params.loginId}
                    error={this.mobileNoErrorMsg}
                  />
                </View>

                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Email Id"
                    onChangeText={emailId => {
                      this.emailIdErrorMsg = ''
                      this.setState({ emailId })
                    }}
                    disabled="true"
                    value={this.props.route.params.loginId}
                    error={this.emailIdErrorMsg}
                  />
                </View>

                <View style={[styles.rowButton]}>
                  <Button
                    mode="contained"
                    uppercase="false"
                    // disabled={!this.context.isConnected || this.props.fetching}
                    color={Colors.background}
                    style={styles.buttonWrapper}
                    onPress={this.submitUpdate}>
                    <Text style={styles.buttonText}>UPDATE</Text>
                  </Button>
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
    userDetail: state.userDetails.userDetail,
    fetching: state.userDetails.fetchingOne,
    updating: state.userDetails.updating,
    error: state.userDetails.errorUpdating,
    account: state.account.account,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUserDetails: options => dispatch(UserDetailsActions.userDetailsAllRequest(options)),
    getUserDetail: id => dispatch(UserDetailActions.userDetailRequest(id)),
    updateUserDetail: userDetail => dispatch(UserDetailActions.userDetailUpdateRequest(userDetail)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetailEntityEditScreen)
