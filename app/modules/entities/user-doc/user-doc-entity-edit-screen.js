// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import UserDocActions from './user-doc.reducer'
// import UserDetailsActions from '../user-details/user-details.reducer'
// import DocSubTypeActions from '../doc-sub-type/doc-sub-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { userDocEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './user-doc-entity-edit-screen-style'

// let Form = t.form.Form

// class UserDocEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         docName: t.String,
//         docUrl: t.String,
//         createdOn: t.maybe(t.Date),
//         modifiedOn: t.maybe(t.Date),
//         userDetailsId: this.getUserDetails(),
//         userDetailsId: this.getUserDetails(),
//         docSubTypeId: this.getDocSubTypes(),
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
//           docSubTypeId: {
//             testID: 'docSubTypeIdInput',
//             label: 'DocSubType',
//           },
//           userDetailsId: {
//             testID: 'userDetailsIdInput',
//             label: 'UserDetails',
//           },
//           docName: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('docUrl').refs.input.focus(),
//             testID: 'docNameInput',
//           },
//           docUrl: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdOn').refs.input.focus(),
//             testID: 'docUrlInput',
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
//       userDoc: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getUserDoc(props.data.entityId)
//     }
//     this.props.getAllUserDetails()
//     this.props.getAllUserDetails()
//     this.props.getAllDocSubTypes()
//     this.props.getAllUserDetails()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.userDoc !== prevState.userDoc && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.userDoc), userDoc: nextProps.userDoc }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllUserDocs({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.userDoc.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: userDocEntityDetailScreen.bind(this, { entityId }),
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
//   getDocSubTypes = () => {
//     const docSubTypes = {}
//     this.props.docSubTypes.forEach(docSubType => {
//       docSubTypes[docSubType.id] = docSubType.id ? docSubType.id.toString() : docSubType.id.toString()
//     })
//     return t.maybe(t.enums(docSubTypes))
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
//     const userDoc = this.form.getValue()
//     if (userDoc) {
//       // if validation fails, value will be null
//       this.props.updateUserDoc(formValueToEntity(userDoc))
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
//     docName: value.docName || null,
//     docUrl: value.docUrl || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     docSubTypeId: value.docSubTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     docName: value.docName || null,
//     docUrl: value.docUrl || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//     docSubTypeId: value.docSubTypeId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     userDetails: state.userDetails.userDetails || [],
//     docSubTypes: state.docSubTypes.docSubTypes || [],
//     userDoc: state.userDocs.userDoc,
//     fetching: state.userDocs.fetchingOne,
//     updating: state.userDocs.updating,
//     error: state.userDocs.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllUserDetails: options => dispatch(UserDetailsActions.userDetailsAllRequest(options)),
//     getAllDocSubTypes: options => dispatch(DocSubTypeActions.docSubTypeAllRequest(options)),
//     getUserDoc: id => dispatch(UserDocActions.userDocRequest(id)),
//     getAllUserDocs: options => dispatch(UserDocActions.userDocAllRequest(options)),
//     updateUserDoc: userDoc => dispatch(UserDocActions.userDocUpdateRequest(userDoc)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(UserDocEntityEditScreen)
