// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { subCategoryTypeEntityEditScreen } from '../../../navigation/layouts'

// import SubCategoryTypeActions from './sub-category-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sub-category-type-entity-detail-screen-style'

// class SubCategoryTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSubCategoryType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSubCategoryTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SubCategoryType?',
//       'Are you sure you want to delete the SubCategoryType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSubCategoryType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.subCategoryType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.subCategoryType.id}</Text>
//         <Text testID="ename">Ename: {this.props.subCategoryType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.subCategoryType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.subCategoryType.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.subCategoryType.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.subCategoryType.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.subCategoryType.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.subCategoryType.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={subCategoryTypeEntityEditScreen.bind(this, { entityId: this.props.subCategoryType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     subCategoryType: state.subCategoryTypes.subCategoryType,
//     deleting: state.subCategoryTypes.deleting,
//     errorDeleting: state.subCategoryTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSubCategoryType: id => dispatch(SubCategoryTypeActions.subCategoryTypeRequest(id)),
//     getAllSubCategoryTypes: options => dispatch(SubCategoryTypeActions.subCategoryTypeAllRequest(options)),
//     deleteSubCategoryType: id => dispatch(SubCategoryTypeActions.subCategoryTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SubCategoryTypeEntityDetailScreen)
