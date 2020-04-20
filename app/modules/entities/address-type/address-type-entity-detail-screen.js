// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { addressTypeEntityEditScreen } from '../../../navigation/layouts'

// import AddressTypeActions from './address-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './address-type-entity-detail-screen-style'

// class AddressTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getAddressType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllAddressTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete AddressType?',
//       'Are you sure you want to delete the AddressType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteAddressType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.addressType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.addressType.id}</Text>
//         <Text testID="ename">Ename: {this.props.addressType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.addressType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.addressType.activeValue}</Text>
//         <RoundedButton text="Edit" onPress={addressTypeEntityEditScreen.bind(this, { entityId: this.props.addressType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     addressType: state.addressTypes.addressType,
//     deleting: state.addressTypes.deleting,
//     errorDeleting: state.addressTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAddressType: id => dispatch(AddressTypeActions.addressTypeRequest(id)),
//     getAllAddressTypes: options => dispatch(AddressTypeActions.addressTypeAllRequest(options)),
//     deleteAddressType: id => dispatch(AddressTypeActions.addressTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AddressTypeEntityDetailScreen)
