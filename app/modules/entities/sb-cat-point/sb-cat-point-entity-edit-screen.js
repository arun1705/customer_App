// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import SbCatPointActions from './sb-cat-point.reducer'
// import SubCategoryActions from '../sub-category/sub-category.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { sbCatPointEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './sb-cat-point-entity-edit-screen-style'

// let Form = t.form.Form

// class SbCatPointEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         pointCount: t.Number,
//         activeValue: t.Boolean,
//         createdBy: t.maybe(t.Number),
//         createdOn: t.maybe(t.Date),
//         modifiedBy: t.maybe(t.Number),
//         modifiedOn: t.maybe(t.Date),
//         subCategoryId: this.getSubCategories(),
//       }),
//       formValue: { id: null },
//       formOptions: {
//         fields: {
//           id: {
//             hidden: true,
//           },
//           subCategoryId: {
//             testID: 'subCategoryIdInput',
//             label: 'SubCategory',
//           },
//           pointCount: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('activeValue').refs.input.focus(),
//             testID: 'pointCountInput',
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
//       sbCatPoint: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getSbCatPoint(props.data.entityId)
//     }
//     this.props.getAllSubCategories()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.sbCatPoint !== prevState.sbCatPoint && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.sbCatPoint), sbCatPoint: nextProps.sbCatPoint }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatPoints({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.sbCatPoint.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: sbCatPointEntityDetailScreen.bind(this, { entityId }),
//           })
//         }
//         Navigation.pop(this.props.componentId)
//         Alert.alert('Success', 'Entity saved successfully', alertOptions)
//       }
//     }
//   }

//   getSubCategories = () => {
//     const subCategories = {}
//     this.props.subCategories.forEach(subCategory => {
//       subCategories[subCategory.id] = subCategory.ecode ? subCategory.ecode.toString() : subCategory.id.toString()
//     })
//     return t.maybe(t.enums(subCategories))
//   }
//   submitForm() {
//     // call getValue() to get the values of the form
//     const sbCatPoint = this.form.getValue()
//     if (sbCatPoint) {
//       // if validation fails, value will be null
//       this.props.updateSbCatPoint(formValueToEntity(sbCatPoint))
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
//     pointCount: value.pointCount || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     subCategoryId: value.subCategoryId || null,
//   }
// }
// const formValueToEntity = value => {
//   const entity = {
//     id: value.id || null,
//     pointCount: value.pointCount || null,
//     activeValue: value.activeValue || null,
//     createdBy: value.createdBy || null,
//     createdOn: value.createdOn || null,
//     modifiedBy: value.modifiedBy || null,
//     modifiedOn: value.modifiedOn || null,
//     subCategoryId: value.subCategoryId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     subCategories: state.subCategories.subCategories || [],
//     sbCatPoint: state.sbCatPoints.sbCatPoint,
//     fetching: state.sbCatPoints.fetchingOne,
//     updating: state.sbCatPoints.updating,
//     error: state.sbCatPoints.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllSubCategories: options => dispatch(SubCategoryActions.subCategoryAllRequest(options)),
//     getSbCatPoint: id => dispatch(SbCatPointActions.sbCatPointRequest(id)),
//     getAllSbCatPoints: options => dispatch(SbCatPointActions.sbCatPointAllRequest(options)),
//     updateSbCatPoint: sbCatPoint => dispatch(SbCatPointActions.sbCatPointUpdateRequest(sbCatPoint)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatPointEntityEditScreen)
