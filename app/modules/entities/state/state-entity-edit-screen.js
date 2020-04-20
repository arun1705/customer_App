// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import StateActions from './state.reducer'
// import CountryActions from '../country/country.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { stateEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './state-entity-edit-screen-style'

// let Form = t.form.Form

// class StateEntityEditScreen extends React.Component {
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
//       state: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getState(props.data.entityId)
//     }
//     this.props.getAllCountries()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.state !== prevState.state && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.state), state: nextProps.state }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllStates({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.state.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: stateEntityDetailScreen.bind(this, { entityId }),
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
//   submitForm() {
//     // call getValue() to get the values of the form
//     const state = this.form.getValue()
//     if (state) {
//       // if validation fails, value will be null
//       this.props.updateState(formValueToEntity(state))
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
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     countries: state.countries.countries || [],
//     state: state.states.state,
//     fetching: state.states.fetchingOne,
//     updating: state.states.updating,
//     error: state.states.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCountries: options => dispatch(CountryActions.countryAllRequest(options)),
//     getState: id => dispatch(StateActions.stateRequest(id)),
//     getAllStates: options => dispatch(StateActions.stateAllRequest(options)),
//     updateState: state => dispatch(StateActions.stateUpdateRequest(state)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(StateEntityEditScreen)
