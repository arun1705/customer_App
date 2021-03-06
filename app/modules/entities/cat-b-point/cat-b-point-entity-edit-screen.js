// import React from 'react'
// import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
// import { connect } from 'react-redux'
// import CatBPointActions from './cat-b-point.reducer'
// import CategoryActions from '../category/category.reducer'
// import { Navigation } from 'react-native-navigation'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { catBPointEntityDetailScreen } from '../../../navigation/layouts'

// import t from 'tcomb-form-native'

// import styles from './cat-b-point-entity-edit-screen-style'

// let Form = t.form.Form

// class CatBPointEntityEditScreen extends React.Component {
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
//         categoryId: this.getCategories(),
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
//       catBPoint: {},
//       isNewEntity: true,
//     }
//     if (props.data && props.data.entityId) {
//       this.state.isNewEntity = false
//       this.props.getCatBPoint(props.data.entityId)
//     }
//     this.props.getAllCategories()

//     this.submitForm = this.submitForm.bind(this)
//     this.formChange = this.formChange.bind(this)
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.catBPoint !== prevState.catBPoint && !prevState.isNewEntity) {
//       return { formValue: entityToFormValue(nextProps.catBPoint), catBPoint: nextProps.catBPoint }
//     }
//     return null
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.updating && !this.props.updating) {
//       if (this.props.error) {
//         Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCatBPoints({ page: 0, sort: 'id,asc', size: 20 })
//         const entityId = this.props.catBPoint.id
//         const alertOptions = [{ text: 'OK' }]
//         if (!this.state.formValue.id) {
//           alertOptions.push({
//             text: 'View',
//             onPress: catBPointEntityDetailScreen.bind(this, { entityId }),
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
//     const catBPoint = this.form.getValue()
//     if (catBPoint) {
//       // if validation fails, value will be null
//       this.props.updateCatBPoint(formValueToEntity(catBPoint))
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
//     categoryId: value.categoryId || null,
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
//     categoryId: value.categoryId || null,
//   }
//   return entity
// }

// const mapStateToProps = state => {
//   return {
//     categories: state.categories.categories || [],
//     catBPoint: state.catBPoints.catBPoint,
//     fetching: state.catBPoints.fetchingOne,
//     updating: state.catBPoints.updating,
//     error: state.catBPoints.errorUpdating,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllCategories: options => dispatch(CategoryActions.categoryAllRequest(options)),
//     getCatBPoint: id => dispatch(CatBPointActions.catBPointRequest(id)),
//     getAllCatBPoints: options => dispatch(CatBPointActions.catBPointAllRequest(options)),
//     updateCatBPoint: catBPoint => dispatch(CatBPointActions.catBPointUpdateRequest(catBPoint)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CatBPointEntityEditScreen)
