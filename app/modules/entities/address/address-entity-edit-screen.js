import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native'
import { TextInput as TextInputPaper, Button, HelperText, Card, Title, Paragraph } from 'react-native-paper'
import styles from './address-entity-edit-screen-style'
import colors from '../../../shared/themes/colors'
import { Colors, Metrics } from '../../../shared/themes'
import { Dropdown } from 'react-native-material-dropdown'
import CountryActions from '../country/country.reducer'
import StateActions from '../state/state.reducer'
import CityActions from '../city/city.reducer'
import PincodeActions from '../pincode/pincode.reducer'
import AreaActions from '../area/area.reducer'
import AddressActions from './address.reducer'
import AddressTypeActions from '../address-type/address-type.reducer'
import { connect } from 'react-redux'
import NetWork from '../../../shared/components/offline/NetWork'
import { NetworkContext } from '../../../shared/components/offline/context'

class AddressAddEditScreen extends Component {
  static contextType = NetworkContext

  constructor(props) {
    super(props)

    this.mobileNoErrorMsg = ''
    this.submitUpdate = this.submitUpdate.bind(this)

    this.typeErrorMsg = ''
    this.lastNameErrorMsg = ''
    this.emailIdErrorMsg = ''
    this.state = {
      addressTypeList: [],
      selectedAddressType: '',
      countryList: [],
      selectedCountry: '',
      stateList: [],
      selectedState: '',
      cityList: [],
      selectedCity: '',
      pincodeList: [],
      selectedPincode: '',
      areaList: [],
      selectedArea: '',
      addressLineOne: '',
      addressLineTwo: '',
      isSwitchOn: false,
      refresh: true,
      setUpdateValue: false,
      modifiedById: this.props.account ? this.props.account.id : null,
    }
  }

  componentDidMount() {
    this.props.getCountry()
    this.props.getAddressTypes()
    this.props.getAddress(this.props.route.params.addressId)
  }

  componentDidUpdate(prevProps) {
    // update address fetch address and update it in state
    if (prevProps.fetching && !this.props.fetching && this.props.address) {
      this.setState(
        {
          setUpdateValue: true,
        },
        () => {
          this.props.getStates(this.props.address.countryId)
          this.props.getCities(this.props.address.stateId)
          this.props.getPincodes(this.props.address.cityId)
          this.props.getAreas(this.props.address.pincodeId)
        },
      )
    }

    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong Adding the Address', [{ text: 'OK' }])
      } else {
        this.props.getAddresses(this.props.account ? this.props.account.id : 0)
        if (this.props.route.params.addressId > 0) {
          Alert.alert('Success', 'Address updated successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        } else {
          Alert.alert('Success', 'Address added successfully!', [{ text: 'OK', onPress: () => this.props.navigation.goBack() }])
        }
      }
    }

    // fetch country and set values to it
    if (prevProps.fetchingAllAddressTypes && !this.props.fetchingAllAddressTypes && this.props.addressTypes) {
      let addressTypeList = []
      for (var i = 0; i < this.props.addressTypes.length; i++) {
        addressTypeList.push({
          value: this.props.addressTypes[i].id,
          label: this.props.addressTypes[i].ename,
        })
      }
      this.setState({
        addressTypeList,
      })
    }

    // fetch country and set values to it
    if (prevProps.fetchingAllCountries && !this.props.fetchingAllCountries && this.props.countries) {
      let countryList = []
      for (var i = 0; i < this.props.countries.length; i++) {
        countryList.push({
          value: this.props.countries[i].id,
          label: this.props.countries[i].ename,
        })
      }
      this.setState({
        countryList,
      })
    }
    // fetch state and set values to it
    if (prevProps.fetchingAllStates && !this.props.fetchingAllStates && this.props.states) {
      let stateList = []
      for (var i = 0; i < this.props.states.length; i++) {
        stateList.push({
          value: this.props.states[i].id,
          label: this.props.states[i].ename,
        })
      }
      this.setState({
        stateList,
      })
    }

    // fetch city and set values to it
    if (prevProps.fetchingAllCities && !this.props.fetchingAllCities && this.props.cities) {
      let cityList = []
      for (var i = 0; i < this.props.cities.length; i++) {
        cityList.push({
          value: this.props.cities[i].id,
          label: this.props.cities[i].ename,
        })
      }
      this.setState({
        cityList,
      })
    }

    // fetch pinocdes and set values to it
    if (prevProps.fetchingAllPincodes && !this.props.fetchingAllPincodes && this.props.pincodes) {
      let pincodeList = []
      for (var i = 0; i < this.props.pincodes.length; i++) {
        pincodeList.push({
          value: this.props.pincodes[i].id,
          label: this.props.pincodes[i].ecode,
        })
      }
      this.setState({
        pincodeList,
      })
    }

    // fetch area and set values to it
    if (prevProps.fetchingAllAreas && !this.props.fetchingAllAreas && this.props.areas) {
      let areaList = []
      for (var i = 0; i < this.props.areas.length; i++) {
        areaList.push({
          value: this.props.areas[i].id,
          label: this.props.areas[i].ename,
        })
      }
      this.setState({
        areaList,
      })

      if (this.state.setUpdateValue) {
        this.setState({
          selectedAddressType: this.props.address.addressTypeId,
          selectedCountry: this.props.address.countryId,
          selectedState: this.props.address.stateId,
          selectedCity: this.props.address.cityId,
          selectedPincode: this.props.address.pincodeId,
          selectedArea: this.props.address.areaId,
          addressLineOne: this.props.address.addressLineOne,
          addressLineTwo: this.props.address.addressLineTwo,
          isSwitchOn: this.props.address.primary,
          setUpdateValue: false,
        })
        console.log('--------f-----', this.props.address)
      }
    }
  }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }
  submitUpdate() {
    const {
      selectedAddressType,
      selectedCountry,
      selectedState,
      selectedCity,
      selectedPincode,
      selectedArea,
      addressLineOne,
      addressLineTwo,
      isSwitchOn,
      modifiedById,
    } = this.state

    const Address = {
      id: this.props.route.params.addressId,
      addressTypeId: selectedAddressType,
      countryId: selectedCountry,
      stateId: selectedState,
      cityId: selectedCity,
      pincodeId: selectedPincode,
      areaId: selectedArea,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      modifiedById: modifiedById,
      primary: isSwitchOn,
      userDetailsId: this.props.route.params.userId,
    }
    this.props.addAddress(Address)

    // const { mobile, type } = this.state
    // this.validation = true

    // if (mobile === '') {
    //   this.mobileNoErrorMsg = 'Please Enter Mobile No'
    //   this.validation = false
    // } else if (!validateMobNumLength(mobile)) {
    //   this.mobileNoErrorMsg = 'Mobile No is not valid'
    //   this.validation = false
    // } else if (!validateMobNum(mobile)) {
    //   this.mobileNoErrorMsg = 'Mobile No is not valid'
    //   this.validation = false
    // }

    // if (type === '') {
    //   this.typeErrorMsg = 'Enter the  first name'
    //   this.validation = false
    // }

    // if (this.validation) {
    //   // alert("success")
    //   const userDetail = { type: type, mobile: mobile }
    //   console.log('val', userDetail)
    //   // this.props.register(userDetail)
    //   // }
    // } else {
    //   this.refresh()
    // }
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    })
  }

  setAddressType(value, index, data) {
    this.setState({
      selectedAddressType: value,
    })
  }

  getState(value, index, data) {
    this.props.getStates(value)
    this.setState({
      selectedCountry: value,
      selectedState: '',
      selectedCity: '',
      selectedPincode: '',
      selectedArea: '',
      cityList: [],
      pincodeList: [],
      areaList: [],
    })
  }
  getCity(value, index, data) {
    this.props.getCities(value)
    this.setState({
      selectedState: value,
      selectedCity: '',
      selectedPincode: '',
      selectedArea: '',
      pincodeList: [],
      areaList: [],
    })
  }

  getPincode(value, index, data) {
    this.props.getPincodes(value)
    this.setState({
      selectedCity: value,
      selectedPincode: '',
      selectedArea: '',
      areaList: [],
    })
  }
  getArea(value, index, data) {
    this.props.getAreas(value)
    this.setState({
      selectedPincode: value,
      selectedArea: '',
    })
  }
  setArea(value, index, data) {
    this.setState({
      selectedArea: value,
    })
  }
  render() {
    const { addressId } = this.props.route.params
    const { countryList, stateList, cityList, pincodeList, areaList, addressTypeList, isSwitchOn } = this.state
    return (
      <>
        <ScrollView style={[styles.container]} keyboardShouldPersistTaps="always">
          <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
          {this.context.isInternetReachable ? (
            <>
              <View style={styles.box}>
                {addressId > 0 ? (
                  <View style={styles.row}>
                    <Text style={styles.header}>Edit Address</Text>
                  </View>
                ) : (
                  <View style={styles.row}>
                    <Text style={styles.header}>Add Address</Text>
                  </View>
                )}
                <View style={styles.row}>
                  <Dropdown
                    label="Select Address Type"
                    data={addressTypeList}
                    value={this.state.selectedAddressType}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.setAddressType.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <Dropdown
                    label="Select Country"
                    data={countryList}
                    value={this.state.selectedCountry}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.getState.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <Dropdown
                    label="Select State"
                    data={stateList}
                    value={this.state.selectedState}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.getCity.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <Dropdown
                    label="Select City"
                    data={cityList}
                    value={this.state.selectedCity}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.getPincode.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <Dropdown
                    label="Select Pincode"
                    data={pincodeList}
                    value={this.state.selectedPincode}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.getArea.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <Dropdown
                    label="Select Area"
                    data={areaList}
                    value={this.state.selectedArea}
                    selectedItemColor={Colors.statusBar}
                    onChangeText={this.setArea.bind(this)}
                  />
                </View>
                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    maxLength={150}
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Address Line One"
                    onChangeText={addressLineOne => {
                      this.addressLineOneErrMsg = ''
                      this.setState({ addressLineOne })
                    }}
                    value={this.state.addressLineOne}
                    error={this.addressLineOneErrMsg}
                  />
                </View>
                <View style={styles.row}>
                  <TextInputPaper
                    underlineColor="green"
                    mode="outlined"
                    autoCapitalize="none"
                    maxLength={150}
                    theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                    label="Address Line Two"
                    onChangeText={addressLineTwo => {
                      this.addressLineTwoErrMsg = ''
                      this.setState({ addressLineTwo })
                    }}
                    value={this.state.addressLineTwo}
                    error={this.addressLineTwoErrMsg}
                  />
                </View>
                <View style={styles.toggleButton}>
                  <Text style={{ fontSize: 20, color: Colors.textField, marginLeft: 10 }}>Make it primary Address?</Text>
                  <Switch
                    value={isSwitchOn}
                    onValueChange={() => {
                      this.setState({ isSwitchOn: !isSwitchOn })
                    }}
                    style={{ alignSelf: 'flex-end' }}
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
                    <Text style={styles.buttonText}>SAVE</Text>
                  </Button>

                  {/* {addressId > 0 ? (
              <Button mode="contained" uppercase="false" color={Colors.fire} style={styles.buttonWrapper} onPress={this.submitUpdate}>
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
    address: state.addresses.address,
    addresses: state.addresses.addresses,
    account: state.account.account,
    addressTypes: state.addressTypes.addressTypes,
    fetchingAllAddressTypes: state.addressTypes.fetchingAll,
    countries: state.countries.countries,
    fetchingAllCountries: state.countries.fetchingAll,
    states: state.states.states,
    fetchingAllStates: state.states.fetchingAll,
    cities: state.cities.cities,
    fetchingAllCities: state.cities.fetchingAll,
    pincodes: state.pincodes.pincodes,
    fetchingAllPincodes: state.pincodes.fetchingAll,
    areas: state.areas.areas,
    fetchingAllAreas: state.areas.fetchingAll,
    fetching: state.addresses.fetchingOne,
    updating: state.addresses.updating,
    error: state.addresses.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAddress: id => dispatch(AddressActions.addressRequest(id)),
    getAddressTypes: options => dispatch(AddressTypeActions.addressTypeAllRequest(options)),
    getCountry: options => dispatch(CountryActions.countryAllRequest(options)),
    getStates: id => dispatch(StateActions.stateAllRequest(id)),
    getCities: id => dispatch(CityActions.cityAllRequest(id)),
    getPincodes: id => dispatch(PincodeActions.pincodeAllRequest(id)),
    getAreas: id => dispatch(AreaActions.areaAllRequest(id)),
    addAddress: address => dispatch(AddressActions.addressUpdateRequest(address)),
    getAddresses: id => dispatch(AddressActions.addressAllRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressAddEditScreen)
