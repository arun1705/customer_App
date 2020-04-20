// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import SubCategoryActions from './sub-category.reducer'
// import SubCategoryTypeActions from '../sub-category-type/sub-category-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { subCategoryEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './sub-category-entity-edit-screen-style'

// let Form = t.form.Form

// class SubCategoryEntityEditScreen extends React.Component {
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
//         subCategoryTypes: t.list(this.getSubCategoryTypes()),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           subCategoryTypeId: {
//             testID: 'subCategoryTypeIdInput',
//             label: 'SubCategoryType',
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
//       subCategory: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getSubCategory(props.data.entityId)
//     }
//     this.props.getAllSubCategoryTypes()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.subCategory !== prevState.subCategory && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.subCategory), subCategory: nextProps.subCategory }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSubCategories({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.subCategory.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: subCategoryEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getSubCategoryTypes = () => {
//     const subCategoryTypes = {}
//     this.props.subCategoryTypes.forEach(subCategoryType => {
//       subCategoryTypes[subCategoryType.id] = subCategoryType.ecode ? subCategoryType.ecode.toString() : subCategoryType.id.toString()
//     })
//     return t.maybe(t.enums(subCategoryTypes))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const subCategory = this.form.getValue()
//     if (subCategory) {
//       // if validation fails, value will be null
//       this.props.updateSubCategory(formValueToEntity(subCategory))
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
//     subCategoryTypes: [].concat(
//       value.subCategoryTypes.map(subCategoryType => {
//         return subCategoryType.id
//       }),
//     ),
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
//     subCategoryTypes: [].concat(
//       value.subCategoryTypes.map(subCategoryType => {
//         return { id: subCategoryType }
//       }),
//     ),
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     subCategoryTypes: state.subCategoryTypes.subCategoryTypes || [],
//     subCategory: state.subCategories.subCategory,
//     fetching: state.subCategories.fetchingOne,
//     updating: state.subCategories.updating,
//     error: state.subCategories.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllSubCategoryTypes: options => dispatch(SubCategoryTypeActions.subCategoryTypeAllRequest(options)),
//     getSubCategory: id => dispatch(SubCategoryActions.subCategoryRequest(id)),
//     getAllSubCategories: options => dispatch(SubCategoryActions.subCategoryAllRequest(options)),
//     updateSubCategory: subCategory => dispatch(SubCategoryActions.subCategoryUpdateRequest(subCategory)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SubCategoryEntityEditScreen)
