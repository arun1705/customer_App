// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import AreaActions from './area.reducer'
// import CountryActions from '../country/country.reducer'
// import StateActions from '../state/state.reducer'
// import CityActions from '../city/city.reducer'
// import PincodeActions from '../pincode/pincode.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { areaEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './area-entity-edit-screen-style'

// let Form = t.form.Form

// class AreaEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         ename: t.String,
//         ecode: t.String,
//         activeValue: t.Boolean,
//         createdBy: t.maybe(t.Number),
//         createdOn: t.maybe(t.Date),
//         modifiedBy: t.maybe(t.Number),
//         modifiedOn: t.maybe(t.Date),
//         countryId: this.getCountries(),
//         stateId: this.getStates(),
//         cityId: this.getCities(),
//         pincodeId: this.getPincodes(),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           countryId: {
//             testID: 'countryIdInput',
//             label: 'Country',
//           },
//           stateId: {
//             testID: 'stateIdInput',
//             label: 'State',
//           },
//           cityId: {
//             testID: 'cityIdInput',
//             label: 'City',
//           },
//           pincodeId: {
//             testID: 'pincodeIdInput',
//             label: 'Pincode',
//           },
//           ename: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('ecode').refs.input.focus(),
//             testID: 'enameInput',
//           },
//           ecode: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('activeValue').refs.input.focus(),
//             testID: 'ecodeInput',
//           },
//           activeValue: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdBy').refs.input.focus(),
//             testID: 'activeValueInput',
//           },
//           createdBy: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdOn').refs.input.focus(),
//             testID: 'createdByInput',
//           },
//           createdOn: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('modifiedBy').refs.input.focus(),
//             testID: 'createdOnInput',
//           },
//           modifiedBy: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('modifiedOn').refs.input.focus(),
//             testID: 'modifiedByInput',
//           },
//           modifiedOn: {
//             testID: 'modifiedOnInput',
//           },
//         },
//       },
//       area: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getArea(props.data.entityId)
//     }
//     this.props.getAllCountries()
//     this.props.getAllStates()
//     this.props.getAllCities()
//     this.props.getAllPincodes()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.area !== prevState.area && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.area), area: nextProps.area }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllAreas({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.area.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: areaEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getCountries = () => {
//     const countries = {}
//     this.props.countries.forEach(country => {
//       countries[country.id] = country.ecode ? country.ecode.toString() : country.id.toString()
//     })
//     return t.maybe(t.enums(countries))
//   }
//   getStates = () => {
//     const states = {}
//     this.props.states.forEach(state => {
//       states[state.id] = state.ecode ? state.ecode.toString() : state.id.toString()
//     })
//     return t.maybe(t.enums(states))
//   }
//   getCities = () => {
//     const cities = {}
//     this.props.cities.forEach(city => {
//       cities[city.id] = city.ecode ? city.ecode.toString() : city.id.toString()
//     })
//     return t.maybe(t.enums(cities))
//   }
//   getPincodes = () => {
//     const pincodes = {}
//     this.props.pincodes.forEach(pincode => {
//       pincodes[pincode.id] = pincode.ecode ? pincode.ecode.toString() : pincode.id.toString()
//     })
//     return t.maybe(t.enums(pincodes))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const area = this.form.getValue()
//     if (area) {
//       // if validation fails, value will be null
//       this.props.updateArea(formValueToEntity(area))
//     }
//   }

//   formChange(newValue) {
//     this.setState({
//       formValue: newValue,
//     })
//   }

//   render() {
//     if (this.props.fetching) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <KeyboardAwareScrollView>
//         <ScrollView style={styles.container} testID="entityScrollView">
//           <Form
//             ref={c => {
//               this.form = c
//             }}
//             type={this.state.formModel}
//             options={this.state.formOptions}
//             value={this.state.formValue}
//             onChange={this.formChange}
//           />
//           <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor="#99d9f4" testID="submitButton">
//             <Text style={styles.buttonText}>Save</Text>
//           </TouchableHighlight>
//         </ScrollView>
//       </KeyboardAwareScrollView>
//     )
//   }
// }
// // convenience methods for customizing the mapping of the entity to/from the form value
// const entityToFormValue = value => {
//   if (!value) {
//     return {}
//   }
//   return {
//     id: value.id || null,
//     ename: value.ename || null,
//     ecode: value.ecode || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     countryId: value.countryId || null,
//     stateId: value.stateId || null,
//     cityId: value.cityId || null,
//     pincodeId: value.pincodeId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     ename: value.ename || null,
//     ecode: value.ecode || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     countryId: value.countryId || null,
//     stateId: value.stateId || null,
//     cityId: value.cityId || null,
//     pincodeId: value.pincodeId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     countries: state.countries.countries || [],
//     states: state.states.states || [],
//     cities: state.cities.cities || [],
//     pincodes: state.pincodes.pincodes || [],
//     area: state.areas.area,
//     fetching: state.areas.fetchingOne,
//     updating: state.areas.updating,
//     error: state.areas.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCountries: options => dispatch(CountryActions.countryAllRequest(options)),
//     getAllStates: options => dispatch(StateActions.stateAllRequest(options)),
//     getAllCities: options => dispatch(CityActions.cityAllRequest(options)),
//     getAllPincodes: options => dispatch(PincodeActions.pincodeAllRequest(options)),
//     getArea: id => dispatch(AreaActions.areaRequest(id)),
//     getAllAreas: options => dispatch(AreaActions.areaAllRequest(options)),
//     updateArea: area => dispatch(AreaActions.areaUpdateRequest(area)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AreaEntityEditScreen)
