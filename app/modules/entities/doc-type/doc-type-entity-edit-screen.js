// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import DocTypeActions from './doc-type.reducer'
// import UserDetailsActions from '../user-details/user-details.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { docTypeEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './doc-type-entity-edit-screen-style'

// let Form = t.form.Form

// class DocTypeEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         name: t.String,
//         code: t.String,
//         active: t.Boolean,
//         createdOn: t.maybe(t.Date),
//         modifiedOn: t.maybe(t.Date),
//         userDetailsId: this.getUserDetails(),
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
//           name: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('code').refs.input.focus(),
//             testID: 'nameInput',
//           },
//           code: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('active').refs.input.focus(),
//             testID: 'codeInput',
//           },
//           active: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdOn').refs.input.focus(),
//             testID: 'activeInput',
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
//       docType: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getDocType(props.data.entityId)
//     }
//     this.props.getAllUserDetails()
//     this.props.getAllUserDetails()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.docType !== prevState.docType && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.docType), docType: nextProps.docType }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllDocTypes({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.docType.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: docTypeEntityDetailScreen.bind(this, { entityId }),
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
//   submitForm() {
//     // call getValue() to get the values of the form
//     const docType = this.form.getValue()
//     if (docType) {
//       // if validation fails, value will be null
//       this.props.updateDocType(formValueToEntity(docType))
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
//     name: value.name || null,
//     code: value.code || null,
//     active: value.active || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     name: value.name || null,
//     code: value.code || null,
//     active: value.active || null,
//     createdOn: value.createdOn || null,
//     modifiedOn: value.modifiedOn || null,
//     userDetailsId: value.userDetailsId || null,
//     userDetailsId: value.userDetailsId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     userDetails: state.userDetails.userDetails || [],
//     docType: state.docTypes.docType,
//     fetching: state.docTypes.fetchingOne,
//     updating: state.docTypes.updating,
//     error: state.docTypes.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllUserDetails: options => dispatch(UserDetailsActions.userDetailsAllRequest(options)),
//     getDocType: id => dispatch(DocTypeActions.docTypeRequest(id)),
//     getAllDocTypes: options => dispatch(DocTypeActions.docTypeAllRequest(options)),
//     updateDocType: docType => dispatch(DocTypeActions.docTypeUpdateRequest(docType)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DocTypeEntityEditScreen)
