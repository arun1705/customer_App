// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import PhoneActions from './phone.reducer'
// import UserDetailsActions from '../user-details/user-details.reducer'
// import PhoneTypeActions from '../phone-type/phone-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { phoneEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './phone-entity-edit-screen-style'

// let Form = t.form.Form

// class PhoneEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         phoneNum: t.String,
//         primary: t.Boolean,
//         createdOn: t.maybe(t.Date),
//         modifiedOn: t.maybe(t.Date),
//         userDetailsId: this.getUserDetails(),
//         userDetailsId: this.getUserDetails(),
//         phoneTypeId: this.getPhoneTypes(),
//         userDetailsId: this.getUserDetails(),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           userDetailsId: {
//             testID: 'userDetailsIdInput',
//             label: 'CreatedBy',
//           },
//           userDetailsId: {
//             testID: 'userDetailsIdInput',
//             label: 'ModifiedBy',
//           },
//           phoneTypeId: {
//             testID: 'phoneTypeIdInput',
//             label: 'PhoneType',
//           },
//           userDetailsId: {
//             testID: 'userDetailsIdInput',
//             label: 'UserDetails',
//           },
//           phoneNum: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('primary').refs.input.focus(),
//             testID: 'phoneNumInput',
//           },
//           primary: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdOn').refs.input.focus(),
//             testID: 'primaryInput',
//           },
//           createdOn: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('modifiedOn').refs.input.focus(),
//             testID: 'createdOnInput',
//           },
//           modifiedOn: {
//             testID: 'modifiedOnInput',
//           },
//         },
//       },
//       phone: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getPhone(props.data.entityId)
//     }
//     this.props.getAllUserDetails()
//     this.props.getAllUserDetails()
//     this.props.getAllPhoneTypes()
//     this.props.getAllUserDetails()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.phone !== prevState.phone && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.phone), phone: nextProps.phone }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllPhones({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.phone.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: phoneEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getUserDetails = () => {
//     const userDetails = {}
//     this.props.userDetails.forEach(userDetails => {
//       userDetails[userDetails.id] = userDetails.id ? userDetails.id.toString() : userDetails.id.toString()
//     })
//     return t.maybe(t.enums(userDetails))
//   }
//   getUserDetails = () => {
//     const userDetails = {}
//     this.props.userDetails.forEach(userDetails => {
//       userDetails[userDetails.id] = userDetails.id ? userDetails.id.toString() : userDetails.id.toString()
//     })
//     return t.maybe(t.enums(userDetails))
//   }
//   getPhoneTypes = () => {
//     const phoneTypes = {}
//     this.props.phoneTypes.forEach(phoneType => {
//       phoneTypes[phoneType.id] = phoneType.id ? phoneType.id.toString() : phoneType.id.toString()
//     })
//     return t.maybe(t.enums(phoneTypes))
//   }
//   getUserDetails = () => {
//     const userDetails = {}
//     this.props.userDetails.forEach(userDetails => {
//       userDetails[userDetails.id] = userDetails.id ? userDetails.id.toString() : userDetails.id.toString()
//     })
//     return t.maybe(t.enums(userDetails))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const phone = this.form.getValue()
//     if (phone) {
//       // if validation fails, value will be null
//       this.props.updatePhone(formValueToEntity(phone))
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
//     phoneNum: value.phoneNum || null,
//     primary: value.primary || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     phoneTypeId: value.phoneTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     phoneNum: value.phoneNum || null,
//     primary: value.primary || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     phoneTypeId: value.phoneTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     userDetails: state.userDetails.userDetails || [],
//     phoneTypes: state.phoneTypes.phoneTypes || [],
//     phone: state.phones.phone,
//     fetching: state.phones.fetchingOne,
//     updating: state.phones.updating,
//     error: state.phones.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllUserDetails: options => dispatch(UserDetailsActions.userDetailsAllRequest(options)),
//     getAllPhoneTypes: options => dispatch(PhoneTypeActions.phoneTypeAllRequest(options)),
//     getPhone: id => dispatch(PhoneActions.phoneRequest(id)),
//     getAllPhones: options => dispatch(PhoneActions.phoneAllRequest(options)),
//     updatePhone: phone => dispatch(PhoneActions.phoneUpdateRequest(phone)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PhoneEntityEditScreen)
