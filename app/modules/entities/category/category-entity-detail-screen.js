// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { categoryEntityEditScreen } from '../../../navigation/layouts'

// import CategoryActions from './category.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './category-entity-detail-screen-style'

// class CategoryEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCategory(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCategories()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Category?',
//       'Are you sure you want to delete the Category?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCategory(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.category) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.category.id}</Text>
//         <Text testID="ename">Ename: {this.props.category.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.category.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.category.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.category.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.category.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.category.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.category.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={categoryEntityEditScreen.bind(this, { entityId: this.props.category.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     category: state.categories.category,
//     deleting: state.categories.deleting,
//     errorDeleting: state.categories.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCategory: id => dispatch(CategoryActions.categoryRequest(id)),
//     getAllCategories: options => dispatch(CategoryActions.categoryAllRequest(options)),
//     deleteCategory: id => dispatch(CategoryActions.categoryDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CategoryEntityDetailScreen)
