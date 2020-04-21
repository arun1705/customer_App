import React from 'react'
import { ScrollView, Text, View, Image, Alert } from 'react-native'
import { TextInput as TextInputPaper, Button, HelperText, ActivityIndicator } from 'react-native-paper'
import { connect } from 'react-redux'
import { Colors, Images } from '../../../shared/themes'
import OrderRequestActions from './order-request.reducer'
import AddressActions from '../address/address.reducer'
import PhoneActions from '../phone/phone.reducer'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { Dropdown } from 'react-native-material-dropdown'
import styles from './order-request-entity-edit-screen-style'
import { validateMobNum, validateMobNumLength } from '../../../shared/res/Validate'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'
class OrderRequestEntityEditScreen extends React.Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)
    this.state = {
      mobileList: [],
      alternateMobile: '',
      addressList: [],
      orderRequest: {},
      isNewEntity: true,
      addressIndex: 0,
      visible: false,
      fetchAddressState: true,
      fetchPhonesState: true,
      selectedMobileNo: '',
      refresh: true,
    }
    this.mobileNoErrorMsg = ''
    this.addressError = ''
    this.selectMobileError = ''
    this.handlePressRequestOrder = this.handlePressRequestOrder.bind(this)
  }
  componentDidMount() {
    this.props.getAddresses(this.props.account.id)
    this.props.getPhones(this.props.account.id)
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }
  componentDidUpdate(prevProps) {
    if (this.props.addresses && this.props.addresses.length > 0 && this.state.fetchAddressState) {
      var addressTempArray = []
      for (var i = 0; i < this.props.addresses.length; i++) {
        addressTempArray.push({
          label: `${
            this.props.addresses[i]
              ? this.props.addresses[i].addressLineOne
                ? this.props.addresses[i].addressLineOne.toUpperCase()
                : ''
              : ''
          }, ${this.props.addresses[i] ? this.props.addresses[i].addressLineTwo.toUpperCase() : ''}, ${
            this.props.addresses[i] ? (this.props.addresses[i].areaName ? this.props.addresses[i].areaName.toUpperCase() : '') : ''
          }`,
          value: this.props.addresses[i].id,
        })
      }

      this.setState({
        fetchAddressState: false,
        addressList: addressTempArray,
      })
    }

    if (this.props.phones && this.props.phones.length > 0 && this.state.fetchPhonesState) {
      var phoneTempArray = []
      for (var i = 0; i < this.props.phones.length; i++) {
        phoneTempArray.push({
          value: this.props.phones[i].phoneNum,
        })
      }

      this.setState({
        fetchPhonesState: false,
        mobileList: phoneTempArray,
      })
    }

    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong while creating request!', [{ text: 'OK' }])
      } else {
        this.setState(
          {
            alternateMobile: '',
            addressIndex: 0,
            selectedMobileNo: '',
          },
          () => {
            Alert.alert('Success', 'Request has been successfully created!', [
              { text: 'OK', onPress: () => this.props.navigation.navigate('encash-my-trash-home') },
            ])
          },
        )
      }
    }
  }

  selectedMobileNo(value) {
    this.selectMobileError = ''
    this.setState({ selectedMobileNo: value })
  }

  handlePressRequestOrder() {
    console.log('prop', this.props)
    const { alternateMobile, selectedMobileNo, addressIndex } = this.state
    this.validation = true

    if (selectedMobileNo === '' && alternateMobile === '') {
      if (selectedMobileNo === '') {
        this.selectMobileError = 'Please select mobile'
        this.validation = false
      }
    } else if (alternateMobile !== '') {
      if (!validateMobNumLength(alternateMobile) && !validateMobNum(alternateMobile)) {
        this.mobileNoErrorMsg = 'Please enter valid mobile no.'
        this.validation = false
      }
    }

    if (addressIndex === 0) {
      this.addressError = 'Please select address'
      this.validation = false
    }

    if (this.validation) {
      let address = null

      for (var i = 0; i < this.props.addresses.length; i++) {
        if (this.props.addresses[i].id === addressIndex) {
          address = this.props.addresses[i]
        }
      }

      let mobile = ''

      if (selectedMobileNo !== '') {
        mobile = selectedMobileNo
      }

      if (alternateMobile !== '') {
        mobile = alternateMobile
      }

      if (selectedMobileNo !== '' && alternateMobile !== '') {
        mobile = selectedMobileNo + ',' + alternateMobile
      }

      const orderRequest = {
        mobile: mobile,
        registered: true,
        userId: this.props.account.id,
        countryId: address.countryId,
        stateId: address.stateId,
        cityId: address.cityId,
        pincodeId: address.pincodeId,
        areaId: address.areaId,
        addressId: address.id,
        active: true,
        createdBy: this.props.account.id,
      }

      this.props.updateOrderRequest(orderRequest)
    } else {
      this.refresh()
    }
  }

  render() {
    if (this.props.fetching) {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={[styles.container]} keyboardShouldPersistTaps="always">
          <ActivityIndicator animating={true} color={Colors.background} size="large" style={{ flex: 1, paddingTop: 50 }} />
        </ScrollView>
      )
    }
    return (
      <>
        {this.context.isInternetReachable ? (
          <ScrollView contentContainerStyle={styles.contentContainer} style={[styles.container]} keyboardShouldPersistTaps="always">
            <View style={styles.box}>
              {this.state.addressList.length > 0 ? (
                <View>
                  <View style={styles.row}>
                    <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={Images.pickUpTruck} />
                    <Text style={styles.text}> Tell us the address from where we will pick up the items</Text>
                  </View>

                  <View style={styles.row}>
                    <RadioForm
                      animation={true}
                      onPress={value => {
                        this.addressError = ''
                        this.setState({ addressIndex: value })
                      }}>
                      {/* To create radio buttons, loop through your array of options */}
                      {this.state.addressList.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={obj.value}>
                          {/*  You can set RadioButtonLabel before RadioButtonInput */}
                          <RadioButtonInput
                            obj={obj}
                            index={obj.value}
                            buttonSize={12}
                            isSelected={this.state.addressIndex === obj.value}
                            onPress={value => {
                              this.addressError = ''
                              this.setState({ addressIndex: value })
                            }}
                            borderWidth={1}
                            buttonInnerColor={'#04a262'}
                            buttonOuterColor={this.state.addressIndex === obj.value ? '#04a262' : '#000'}
                            buttonStyle={{}}
                            buttonWrapStyle={{ marginLeft: 0, marginTop: 4 }}
                          />
                          <RadioButtonLabel
                            obj={obj}
                            index={i}
                            onPress={value => {
                              this.addressError = ''

                              this.setState({ addressIndex: value })
                            }}
                            labelHorizontal={true}
                            labelStyle={{ fontSize: 14, color: '#2d2d2d' }}
                            labelWrapStyle={{ marginRight: 10 }}
                          />
                        </RadioButton>
                      ))}
                    </RadioForm>
                    <View style={{ alignSelf: 'center' }}>
                      <HelperText type="error" visible={!this.validation}>
                        {this.addressError}
                      </HelperText>
                    </View>
                  </View>

                  <View style={[styles.row]}>
                    <Text style={styles.text}> Tell us the phone number to pick up the items</Text>
                    <Dropdown
                      baseColor={Colors.textField}
                      label="Select Mobile Number"
                      data={this.state.mobileList}
                      onChangeText={this.selectedMobileNo.bind(this)}
                    />
                    <View style={{ alignSelf: 'center' }}>
                      <HelperText type="error" visible={!this.validation}>
                        {this.selectMobileError}
                      </HelperText>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <TextInputPaper
                      underlineColor="green"
                      mode="outlined"
                      keyboardType="numeric"
                      maxLength={10}
                      theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                      label="Alternate Mobile No"
                      onChangeText={alternateMobile => {
                        this.mobileNoErrorMsg = ''
                        this.setState({ alternateMobile: alternateMobile.replace(/[^0-9]/g, '') })
                      }}
                      value={this.state.alternateMobile}
                      error={this.mobileNoErrorMsg}
                    />
                    <View style={{ alignSelf: 'center' }}>
                      <HelperText type="error" visible={!this.validation}>
                        {this.mobileNoErrorMsg}
                      </HelperText>
                    </View>
                  </View>

                  <View style={[styles.row]}>
                    <Button
                      mode="contained"
                      uppercase="false"
                      color={Colors.background}
                      // disabled={!this.context.isConnected || this.props.fetching}

                      style={styles.buttonWrapper}
                      onPress={this.handlePressRequestOrder}>
                      <Text style={styles.buttonText}>Request Pick Up</Text>
                    </Button>
                  </View>
                </View>
              ) : (
                <View style={styles.row}>
                  <Image style={{ width: 150, height: 150, alignSelf: 'center' }} source={Images.pickUpTruck} />
                  <Text style={styles.text}> Please create at least one address under your profile section, to raise a request.</Text>
                </View>
              )}
            </View>
          </ScrollView>
        ) : (
          <NetWork />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderRequest: state.orderRequests.orderRequest,
    account: state.account.account,
    fetching: state.orderRequests.fetchingOne,
    updating: state.orderRequests.updating,
    error: state.orderRequests.errorUpdating,
    addresses: state.addresses.addresses,
    fetchingAddress: state.addresses.fetching,
    phones: state.phones.phones,
    fetchingPhone: state.phones.fetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrderRequest: id => dispatch(OrderRequestActions.orderRequestRequest(id)),
    getAddresses: userId => dispatch(AddressActions.addressAllRequest(userId)),
    getPhones: userId => dispatch(PhoneActions.phoneAllRequest(userId)),
    getAllOrderRequests: options => dispatch(OrderRequestActions.orderRequestAllRequest(options)),
    updateOrderRequest: orderRequest => dispatch(OrderRequestActions.orderRequestUpdateRequest(orderRequest)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderRequestEntityEditScreen)
