// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import EmailAddActions from './email-add.reducer'
// import UserDetailsActions from '../user-details/user-details.reducer'
// import EmailTypeActions from '../email-type/email-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { emailAddEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './email-add-entity-edit-screen-style'

// let Form = t.form.Form

// class EmailAddEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         emailAdd: t.String,
//         primary: t.Boolean,
//         createdOn: t.maybe(t.Date),
//         modifiedOn: t.maybe(t.Date),
//         userDetailsId: this.getUserDetails(),
//         userDetailsId: this.getUserDetails(),
//         emailTypeId: this.getEmailTypes(),
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
//           emailTypeId: {
//             testID: 'emailTypeIdInput',
//             label: 'EmailType',
//           },
//           userDetailsId: {
//             testID: 'userDetailsIdInput',
//             label: 'UserDetails',
//           },
//           emailAdd: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('primary').refs.input.focus(),
//             testID: 'emailAddInput',
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
//       emailAdd: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getEmailAdd(props.data.entityId)
//     }
//     this.props.getAllUserDetails()
//     this.props.getAllUserDetails()
//     this.props.getAllEmailTypes()
//     this.props.getAllUserDetails()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.emailAdd !== prevState.emailAdd && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.emailAdd), emailAdd: nextProps.emailAdd }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllEmailAdds({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.emailAdd.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: emailAddEntityDetailScreen.bind(this, { entityId }),
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
//   getEmailTypes = () => {
//     const emailTypes = {}
//     this.props.emailTypes.forEach(emailType => {
//       emailTypes[emailType.id] = emailType.id ? emailType.id.toString() : emailType.id.toString()
//     })
//     return t.maybe(t.enums(emailTypes))
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
//     const emailAdd = this.form.getValue()
//     if (emailAdd) {
//       // if validation fails, value will be null
//       this.props.updateEmailAdd(formValueToEntity(emailAdd))
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
//     emailAdd: value.emailAdd || null,
//     primary: value.primary || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     emailTypeId: value.emailTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     emailAdd: value.emailAdd || null,
//     primary: value.primary || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     emailTypeId: value.emailTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     userDetails: state.userDetails.userDetails || [],
//     emailTypes: state.emailTypes.emailTypes || [],
//     emailAdd: state.emailAdds.emailAdd,
//     fetching: state.emailAdds.fetchingOne,
//     updating: state.emailAdds.updating,
//     error: state.emailAdds.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllUserDetails: options => dispatch(UserDetailsActions.userDetailsAllRequest(options)),
//     getAllEmailTypes: options => dispatch(EmailTypeActions.emailTypeAllRequest(options)),
//     getEmailAdd: id => dispatch(EmailAddActions.emailAddRequest(id)),
//     getAllEmailAdds: options => dispatch(EmailAddActions.emailAddAllRequest(options)),
//     updateEmailAdd: emailAdd => dispatch(EmailAddActions.emailAddUpdateRequest(emailAdd)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EmailAddEntityEditScreen)
