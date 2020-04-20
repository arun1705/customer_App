// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import AddressTypeActions from './address-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { addressTypeEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './address-type-entity-edit-screen-style'

// let Form = t.form.Form

// class AddressTypeEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         ename: t.String,
//         ecode: t.String,
//         activeValue: t.Boolean,
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
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
//             returnKeyType: 'done',
//             onSubmitEditing: () => this.submitForm(),
//             testID: 'activeValueInput',
//           },
//         },
//       },
//       addressType: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getAddressType(props.data.entityId)
//     }

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.addressType !== prevState.addressType && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.addressType), addressType: nextProps.addressType }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllAddressTypes({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.addressType.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: addressTypeEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   submitForm() {
//     // call getValue() to get the values of the form
//     const addressType = this.form.getValue()
//     if (addressType) {
//       // if validation fails, value will be null
//       this.props.updateAddressType(formValueToEntity(addressType))
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
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     ename: value.ename || null,
//     ecode: value.ecode || null,
//     activeValue: value.activeValue || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     addressType: state.addressTypes.addressType,
//     fetching: state.addressTypes.fetchingOne,
//     updating: state.addressTypes.updating,
//     error: state.addressTypes.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAddressType: id => dispatch(AddressTypeActions.addressTypeRequest(id)),
//     getAllAddressTypes: options => dispatch(AddressTypeActions.addressTypeAllRequest(options)),
//     updateAddressType: addressType => dispatch(AddressTypeActions.addressTypeUpdateRequest(addressType)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AddressTypeEntityEditScreen)
