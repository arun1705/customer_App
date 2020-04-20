// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { userDocEntityEditScreen } from '../../../navigation/layouts'

// import UserDocActions from './user-doc.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './user-doc-entity-detail-screen-style'

// class UserDocEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getUserDoc(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllUserDocs()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete UserDoc?',
//       'Are you sure you want to delete the UserDoc?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteUserDoc(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.userDoc) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.userDoc.id}</Text>
//         <Text testID="docName">DocName: {this.props.userDoc.docName}</Text>
//         <Text testID="docUrl">DocUrl: {this.props.userDoc.docUrl}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.userDoc.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.userDoc.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={userDocEntityEditScreen.bind(this, { entityId: this.props.userDoc.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userDoc: state.userDocs.userDoc,
//     deleting: state.userDocs.deleting,
//     errorDeleting: state.userDocs.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserDoc: id => dispatch(UserDocActions.userDocRequest(id)),
//     getAllUserDocs: options => dispatch(UserDocActions.userDocAllRequest(options)),
//     deleteUserDoc: id => dispatch(UserDocActions.userDocDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(UserDocEntityDetailScreen)
