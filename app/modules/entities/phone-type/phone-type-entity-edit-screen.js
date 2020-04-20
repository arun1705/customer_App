// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import PhoneTypeActions from './phone-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { phoneTypeEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './phone-type-entity-edit-screen-style'

// let Form = t.form.Form

// class PhoneTypeEntityEditScreen extends React.Component {
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
//       phoneType: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getPhoneType(props.data.entityId)
//     }

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.phoneType !== prevState.phoneType && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.phoneType), phoneType: nextProps.phoneType }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllPhoneTypes({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.phoneType.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: phoneTypeEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   submitForm() {
//     // call getValue() to get the values of the form
//     const phoneType = this.form.getValue()
//     if (phoneType) {
//       // if validation fails, value will be null
//       this.props.updatePhoneType(formValueToEntity(phoneType))
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
//     phoneType: state.phoneTypes.phoneType,
//     fetching: state.phoneTypes.fetchingOne,
//     updating: state.phoneTypes.updating,
//     error: state.phoneTypes.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhoneType: id => dispatch(PhoneTypeActions.phoneTypeRequest(id)),
//     getAllPhoneTypes: options => dispatch(PhoneTypeActions.phoneTypeAllRequest(options)),
//     updatePhoneType: phoneType => dispatch(PhoneTypeActions.phoneTypeUpdateRequest(phoneType)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PhoneTypeEntityEditScreen)
