// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { userTypeEntityEditScreen } from '../../../navigation/layouts'

// import UserTypeActions from './user-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './user-type-entity-detail-screen-style'

// class UserTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getUserType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllUserTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete UserType?',
//       'Are you sure you want to delete the UserType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteUserType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.userType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.userType.id}</Text>
//         <Text testID="ename">Ename: {this.props.userType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.userType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.userType.activeValue}</Text>
//         <RoundedButton text="Edit" onPress={userTypeEntityEditScreen.bind(this, { entityId: this.props.userType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userType: state.userTypes.userType,
//     deleting: state.userTypes.deleting,
//     errorDeleting: state.userTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserType: id => dispatch(UserTypeActions.userTypeRequest(id)),
//     getAllUserTypes: options => dispatch(UserTypeActions.userTypeAllRequest(options)),
//     deleteUserType: id => dispatch(UserTypeActions.userTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(UserTypeEntityDetailScreen)
