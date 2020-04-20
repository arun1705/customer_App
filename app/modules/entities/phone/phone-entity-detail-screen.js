// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { phoneEntityEditScreen } from '../../../navigation/layouts'

// import PhoneActions from './phone.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './phone-entity-detail-screen-style'

// class PhoneEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getPhone(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllPhones()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Phone?',
//       'Are you sure you want to delete the Phone?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deletePhone(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.phone) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.phone.id}</Text>
//         <Text testID="phoneNum">PhoneNum: {this.props.phone.phoneNum}</Text>
//         <Text testID="primary">Primary: {this.props.phone.primary}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.phone.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.phone.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={phoneEntityEditScreen.bind(this, { entityId: this.props.phone.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     phone: state.phones.phone,
//     deleting: state.phones.deleting,
//     errorDeleting: state.phones.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhone: id => dispatch(PhoneActions.phoneRequest(id)),
//     getAllPhones: options => dispatch(PhoneActions.phoneAllRequest(options)),
//     deletePhone: id => dispatch(PhoneActions.phoneDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PhoneEntityDetailScreen)
