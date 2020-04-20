// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import SbCatTypeBPointActions from './sb-cat-type-b-point.reducer'
// import SubCategoryTypeActions from '../sub-category-type/sub-category-type.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { sbCatTypeBPointEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './sb-cat-type-b-point-entity-edit-screen-style'

// let Form = t.form.Form

// class SbCatTypeBPointEntityEditScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.state = {
//       formModel: t.struct({
//         id: t.maybe(t.Number),
//         bPointCount: t.Number,
//         activeValue: t.Boolean,
//         startDate: t.maybe(t.Date),
//         endDate: t.maybe(t.Date),
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
//           bPointCount: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('activeValue').refs.input.focus(),
//             testID: 'bPointCountInput',
//           },
//           activeValue: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('startDate').refs.input.focus(),
//             testID: 'activeValueInput',
//           },
//           startDate: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('endDate').refs.input.focus(),
//             testID: 'startDateInput',
//           },
//           endDate: {
//             returnKeyType: 'next',
//             onSubmitEditing: () => this.form.getComponent('createdBy').refs.input.focus(),
//             testID: 'endDateInput',
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
//       sbCatTypeBPoint: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getSbCatTypeBPoint(props.data.entityId)
//     }
//     this.props.getAllSubCategoryTypes()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.sbCatTypeBPoint !== prevState.sbCatTypeBPoint && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.sbCatTypeBPoint), sbCatTypeBPoint: nextProps.sbCatTypeBPoint }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatTypeBPoints({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.sbCatTypeBPoint.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: sbCatTypeBPointEntityDetailScreen.bind(this, { entityId }),
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
//     const sbCatTypeBPoint = this.form.getValue()
//     if (sbCatTypeBPoint) {
//       // if validation fails, value will be null
//       this.props.updateSbCatTypeBPoint(formValueToEntity(sbCatTypeBPoint))
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
//     bPointCount: value.bPointCount || null,
//     activeValue: value.activeValue || null,
//     startDate: value.startDate || null,
//     endDate: value.endDate || null,
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
//     bPointCount: value.bPointCount || null,
//     activeValue: value.activeValue || null,
//     startDate: value.startDate || null,
//     endDate: value.endDate || null,
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
//     sbCatTypeBPoint: state.sbCatTypeBPoints.sbCatTypeBPoint,
//     fetching: state.sbCatTypeBPoints.fetchingOne,
//     updating: state.sbCatTypeBPoints.updating,
//     error: state.sbCatTypeBPoints.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllSubCategoryTypes: options => dispatch(SubCategoryTypeActions.subCategoryTypeAllRequest(options)),
//     getSbCatTypeBPoint: id => dispatch(SbCatTypeBPointActions.sbCatTypeBPointRequest(id)),
//     getAllSbCatTypeBPoints: options => dispatch(SbCatTypeBPointActions.sbCatTypeBPointAllRequest(options)),
//     updateSbCatTypeBPoint: sbCatTypeBPoint => dispatch(SbCatTypeBPointActions.sbCatTypeBPointUpdateRequest(sbCatTypeBPoint)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatTypeBPointEntityEditScreen)
