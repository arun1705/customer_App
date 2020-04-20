// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import CurrencyBPointActions from './currency-b-point.reducer'
// import CurrencyActions from '../currency/currency.reducer'
// import CountryActions from '../country/country.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { currencyBPointEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './currency-b-point-entity-edit-screen-style'

// let Form = t.form.Form

// class CurrencyBPointEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         bPointvalue: t.Number,
//         activeValue: t.Boolean,
//         createdBy: t.maybe(t.Number),
//         createdOn: t.maybe(t.Date),
//         modifiedBy: t.maybe(t.Number),
//         modifiedOn: t.maybe(t.Date),
//         currencyId: this.getCurrencies(),
//         countryId: this.getCountries(),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           currencyId: {
//             testID: 'currencyIdInput',
//             label: 'Currency',
//           },
//           countryId: {
//             testID: 'countryIdInput',
//             label: 'Country',
//           },
//           bPointvalue: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('activeValue').refs.input.focus(),
//             testID: 'bPointvalueInput',
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
//       currencyBPoint: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getCurrencyBPoint(props.data.entityId)
//     }
//     this.props.getAllCurrencies()
//     this.props.getAllCountries()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.currencyBPoint !== prevState.currencyBPoint && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.currencyBPoint), currencyBPoint: nextProps.currencyBPoint }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCurrencyBPoints({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.currencyBPoint.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: currencyBPointEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getCurrencies = () => {
//     const currencies = {}
//     this.props.currencies.forEach(currency => {
//       currencies[currency.id] = currency.ecode ? currency.ecode.toString() : currency.id.toString()
//     })
//     return t.maybe(t.enums(currencies))
//   }
//   getCountries = () => {
//     const countries = {}
//     this.props.countries.forEach(country => {
//       countries[country.id] = country.ecode ? country.ecode.toString() : country.id.toString()
//     })
//     return t.maybe(t.enums(countries))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const currencyBPoint = this.form.getValue()
//     if (currencyBPoint) {
//       // if validation fails, value will be null
//       this.props.updateCurrencyBPoint(formValueToEntity(currencyBPoint))
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
//     bPointvalue: value.bPointvalue || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     currencyId: value.currencyId || null,
//     countryId: value.countryId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     bPointvalue: value.bPointvalue || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     currencyId: value.currencyId || null,
//     countryId: value.countryId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     currencies: state.currencies.currencies || [],
//     countries: state.countries.countries || [],
//     currencyBPoint: state.currencyBPoints.currencyBPoint,
//     fetching: state.currencyBPoints.fetchingOne,
//     updating: state.currencyBPoints.updating,
//     error: state.currencyBPoints.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCurrencies: options => dispatch(CurrencyActions.currencyAllRequest(options)),
//     getAllCountries: options => dispatch(CountryActions.countryAllRequest(options)),
//     getCurrencyBPoint: id => dispatch(CurrencyBPointActions.currencyBPointRequest(id)),
//     getAllCurrencyBPoints: options => dispatch(CurrencyBPointActions.currencyBPointAllRequest(options)),
//     updateCurrencyBPoint: currencyBPoint => dispatch(CurrencyBPointActions.currencyBPointUpdateRequest(currencyBPoint)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CurrencyBPointEntityEditScreen)
