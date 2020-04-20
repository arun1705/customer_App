// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { subCategoryEntityEditScreen } from '../../../navigation/layouts'

// import SubCategoryActions from './sub-category.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sub-category-entity-detail-screen-style'

// class SubCategoryEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSubCategory(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSubCategories()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SubCategory?',
//       'Are you sure you want to delete the SubCategory?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSubCategory(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.subCategory) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.subCategory.id}</Text>
//         <Text testID="ename">Ename: {this.props.subCategory.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.subCategory.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.subCategory.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.subCategory.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.subCategory.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.subCategory.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.subCategory.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={subCategoryEntityEditScreen.bind(this, { entityId: this.props.subCategory.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     subCategory: state.subCategories.subCategory,
//     deleting: state.subCategories.deleting,
//     errorDeleting: state.subCategories.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSubCategory: id => dispatch(SubCategoryActions.subCategoryRequest(id)),
//     getAllSubCategories: options => dispatch(SubCategoryActions.subCategoryAllRequest(options)),
//     deleteSubCategory: id => dispatch(SubCategoryActions.subCategoryDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SubCategoryEntityDetailScreen)
