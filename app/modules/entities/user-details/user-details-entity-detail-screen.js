// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { userDetailEntityEditScreen } from '../../../navigation/layouts'

// import UserDetailActions from './user-details.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './user-details-entity-detail-screen-style'

// class UserDetailEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getUserDetail(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllUserDetails()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete UserDetail?',
//       'Are you sure you want to delete the UserDetail?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteUserDetail(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.userDetail) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.userDetail.id}</Text>
//         <Text testID="firstName">FirstName: {this.props.userDetail.firstName}</Text>
//         <Text testID="middleName">MiddleName: {this.props.userDetail.middleName}</Text>
//         <Text testID="lastName">LastName: {this.props.userDetail.lastName}</Text>
//         <Text testID="aadharNo">AadharNo: {this.props.userDetail.aadharNo}</Text>
//         <Text testID="panCard">PanCard: {this.props.userDetail.panCard}</Text>
//         <Text testID="userId">UserId: {this.props.userDetail.userId}</Text>
//         <Text testID="loginId">LoginId: {this.props.userDetail.loginId}</Text>
//         <Text testID="userStatus">UserStatus: {this.props.userDetail.userStatus}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.userDetail.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.userDetail.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={userDetailEntityEditScreen.bind(this, { entityId: this.props.userDetail.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userDetail: state.userDetails.userDetail,
//     deleting: state.userDetails.deleting,
//     errorDeleting: state.userDetails.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserDetail: id => dispatch(UserDetailActions.userDetailRequest(id)),
//     getAllUserDetails: options => dispatch(UserDetailActions.userDetailAllRequest(options)),
//     deleteUserDetail: id => dispatch(UserDetailActions.userDetailDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(UserDetailEntityDetailScreen)
