// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import SbCatTypePointActions from './sb-cat-type-point.reducer'
// import SubCategoryTypeActions from '../sub-category-type/sub-category-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { sbCatTypePointEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './sb-cat-type-point-entity-edit-screen-style'

// let Form = t.form.Form

// class SbCatTypePointEntityEditScreen extends React.Component {
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
//         subCategoryTypeId: this.getSubCategoryTypes(),
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
//       sbCatTypePoint: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getSbCatTypePoint(props.data.entityId)
//     }
//     this.props.getAllSubCategoryTypes()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.sbCatTypePoint !== prevState.sbCatTypePoint && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.sbCatTypePoint), sbCatTypePoint: nextProps.sbCatTypePoint }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatTypePoints({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.sbCatTypePoint.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: sbCatTypePointEntityDetailScreen.bind(this, { entityId }),
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
//     const sbCatTypePoint = this.form.getValue()
//     if (sbCatTypePoint) {
//       // if validation fails, value will be null
//       this.props.updateSbCatTypePoint(formValueToEntity(sbCatTypePoint))
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
//     subCategoryTypeId: value.subCategoryTypeId || null,
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
//     subCategoryTypeId: value.subCategoryTypeId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     subCategoryTypes: state.subCategoryTypes.subCategoryTypes || [],
//     sbCatTypePoint: state.sbCatTypePoints.sbCatTypePoint,
//     fetching: state.sbCatTypePoints.fetchingOne,
//     updating: state.sbCatTypePoints.updating,
//     error: state.sbCatTypePoints.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllSubCategoryTypes: options => dispatch(SubCategoryTypeActions.subCategoryTypeAllRequest(options)),
//     getSbCatTypePoint: id => dispatch(SbCatTypePointActions.sbCatTypePointRequest(id)),
//     getAllSbCatTypePoints: options => dispatch(SbCatTypePointActions.sbCatTypePointAllRequest(options)),
//     updateSbCatTypePoint: sbCatTypePoint => dispatch(SbCatTypePointActions.sbCatTypePointUpdateRequest(sbCatTypePoint)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatTypePointEntityEditScreen)
