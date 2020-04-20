// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import SubCategoryTypeActions from './sub-category-type.reducer'
// import CategoryActions from '../category/category.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { subCategoryTypeEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './sub-category-type-entity-edit-screen-style'

// let Form = t.form.Form

// class SubCategoryTypeEntityEditScreen extends React.Component {
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
//         categories: t.list(this.getCategories()),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           categoryId: {
//             testID: 'categoryIdInput',
//             label: 'Category',
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
//       subCategoryType: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getSubCategoryType(props.data.entityId)
//     }
//     this.props.getAllCategories()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.subCategoryType !== prevState.subCategoryType && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.subCategoryType), subCategoryType: nextProps.subCategoryType }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSubCategoryTypes({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.subCategoryType.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: subCategoryTypeEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getCategories = () => {
//     const categories = {}
//     this.props.categories.forEach(category => {
//       categories[category.id] = category.ecode ? category.ecode.toString() : category.id.toString()
//     })
//     return t.maybe(t.enums(categories))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const subCategoryType = this.form.getValue()
//     if (subCategoryType) {
//       // if validation fails, value will be null
//       this.props.updateSubCategoryType(formValueToEntity(subCategoryType))
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
//     categories: [].concat(
//       value.categories.map(category => {
//         return category.id
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
//     categories: [].concat(
//       value.categories.map(category => {
//         return { id: category }
//       }),
//     ),
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     categories: state.categories.categories || [],
//     subCategoryType: state.subCategoryTypes.subCategoryType,
//     fetching: state.subCategoryTypes.fetchingOne,
//     updating: state.subCategoryTypes.updating,
//     error: state.subCategoryTypes.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCategories: options => dispatch(CategoryActions.categoryAllRequest(options)),
//     getSubCategoryType: id => dispatch(SubCategoryTypeActions.subCategoryTypeRequest(id)),
//     getAllSubCategoryTypes: options => dispatch(SubCategoryTypeActions.subCategoryTypeAllRequest(options)),
//     updateSubCategoryType: subCategoryType => dispatch(SubCategoryTypeActions.subCategoryTypeUpdateRequest(subCategoryType)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SubCategoryTypeEntityEditScreen)
