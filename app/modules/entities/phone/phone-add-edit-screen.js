import React from 'react'
import { Text, View, StatusBar, ScrollView, Switch, Alert } from 'react-native'
import { TextInput as TextInputPaper, Button } from 'react-native-paper'
import styles from './phone-add-edit-screen-style'
import colors from '../../../shared/themes/colors'
import { Colors } from '../../../shared/themes'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import PhoneTypeActions from '../phone-type/phone-type.reducer'
import PhoneActions from '../phone/phone.reducer'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
class PhoneAddEditScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.mobileNoErrorMsg = ''
    this.submitUpdate = this.submitUpdate.bind(this)
    this.submitDelete = this.submitDelete.bind(this)

    this.typeErrorMsg = ''
    this.lastNameErrorMsg = ''
    this.emailIdErrorMsg = ''
    this.state = {
      phoneTypes: [],
      mobile: '',
      primary: false,
      refresh: true,
      isSwitchOn: false,
      phoneTypeId: '',
      userDetailsId: this.props.route.params.userId,
      modifiedById: this.props.account.id,
    }
  }
  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }

  componentDidMount() {
    this.props.getAllPhoneTypes()
    this.props.getPhone(this.props.route.params.phoneId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetching && !this.props.fetching && this.props.phone) {
      this.setState({
        primary: this.props.phone.primary,
        isSwitchOn: this.props.phone.primary,
        phoneTypeId: this.props.phone.phoneTypeId,
        mobile: this.props.phone.phoneNum,
      })
    }

    if (prevProps.fetchingAllPhoneType && !this.props.fetchingAllPhoneType) {
      let phoneTypesTempArray = []
      for (var i = 0; i < this.props.phoneTypes.length; i++) {
        phoneTypesTempArray.push({
          value: this.props.phoneTypes[i].id,
          label: this.props.phoneTypes[i].ename,
        })
      }

      this.setState({
        phoneTypes: phoneTypesTempArray,
      })
    }

    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        if (this.props.error.status === 400) {
          Alert.alert('Error', `${this.props.error.title}`, [{ text: 'OK' }])
        } else {
          Alert.alert('Error', 'Something went wrong Adding the Phone Number', [{ text: 'OK' }])
        }
      } else {
        this.props.getPhones(this.props.account ? this.props.account.id : 0)
        if (this.props.route.params.phoneId > 0) {
          Alert.alert('Success', 'Phone number updated successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        } else {
          Alert.alert('Success', 'Phone number added successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        }
      }
    }

    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong deleting the Phone Number', [{ text: 'OK' }])
      } else {
        this.props.getPhones(this.props.account ? this.props.account.id : 0)
        if (this.props.route.params.phoneId > 0) {
          Alert.alert('Success', 'Phone number deleted successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        } else {
          Alert.alert('Success', 'Phone number deleted successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        }
      }
    }
  }

  submitUpdate() {
    const { mobile, isSwitchOn, userDetailsId, modifiedById, phoneTypeId } = this.state
    const phoneType = {
      id: this.props.route.params.phoneId,
      phoneNum: mobile,
      primary: isSwitchOn,
      userDetailsId: userDetailsId,
      modifiedById: modifiedById,
      phoneTypeId: phoneTypeId,
      activeValue: true,
    }

    this.props.addPhone(phoneType)
  }

  submitDelete() {
    // alert(this.props.route.params.phoneId)
    let phoneNum = this.props.route.params.phoneId
    this.props.deletePhone(phoneNum)
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    })
  }
  Selectedtype(value) {
    this.setState({
      phoneTypeId: value,
    })
  }
  render() {
    const { isSwitchOn } = this.state
    const { phoneId } = this.props.route.params

    return (
      <>
        <ScrollView style={[styles.container]} keyboardShouldPersistTaps="always">
          <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
          {this.context.isInternetReachable ? (
            <>
              <View style={styles.box}>
                {phoneId === 0 ? (
                  <View style={styles.row}>
                    <Text style={styles.header}>Add Phone Number</Text>
                  </View>
                ) : (
                  <View style={styles.row}>
                    <Text style={styles.header}>Edit Phone Number</Text>
                  </View>
                )}

                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    keyboardType="numeric"
                    maxLength={10}
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Phone Number"
                    onChangeText={mobile => {
                      this.mobileNoErrorMsg = ''
                      this.setState({ mobile: mobile.replace(/[^0-9]/g, '') })
                    }}
                    value={this.state.mobile}
                    error={this.mobileNoErrorMsg}
                  />
                </View>

                <View style={styles.row}>
                  <Dropdown
                    label="Select Type"
                    data={this.state.phoneTypes}
                    value={this.state.phoneTypeId}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.Selectedtype.bind(this)}
                  />
                  <View style={styles.toggleButton}>
                    <Text style={{ fontSize: 20, color: Colors.textField }}>Use it as a Primary Number?</Text>
                    <Switch
                      value={isSwitchOn}
                      onValueChange={() => {
                        this.setState({ isSwitchOn: !isSwitchOn })
                      }}
                      style={{ alignSelf: 'flex-end' }}
                    />
                  </View>
                </View>

                <View style={[styles.rowButton]}>
                  <Button
                    mode="contained"
                    uppercase="false"
                    // disabled={!this.context.isConnected || this.props.fetching}
                    color={Colors.background}
                    style={styles.buttonWrapper}
                    onPress={this.submitUpdate}>
                    <Text style={styles.buttonText}>SAVE</Text>
                  </Button>
                  {/* {phoneId > 0 ? (
              <Button mode="contained" uppercase="false" color={Colors.fire} style={styles.buttonWrapper} onPress={this.submitDelete}>
                <Text style={styles.buttonText}>DELETE</Text>
              </Button>
            ) : null} */}
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
    phone: state.phones.phone,
    phoneTypes: state.phoneTypes.phoneTypes,
    fetchingAllPhoneType: state.phoneTypes.fetchingAll,
    account: state.account.account,
    fetching: state.phones.fetchingOne,
    updating: state.phones.updating,
    error: state.phones.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhone: id => dispatch(PhoneActions.phoneRequest(id)),
    getAllPhoneTypes: options => dispatch(PhoneTypeActions.phoneTypeAllRequest(options)),
    addPhone: phoneType => dispatch(PhoneActions.phoneUpdateRequest(phoneType)),
    deletePhone: phoneNum => dispatch(PhoneActions.phoneDeleteRequest(phoneNum)),
    getPhones: id => dispatch(PhoneActions.phoneAllRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneAddEditScreen)
