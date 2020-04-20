// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { addressEntityEditScreen } from '../../../navigation/layouts'

// import AddressActions from './address.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './address-entity-detail-screen-style'

// class AddressEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getAddress(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllAddresses()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Address?',
//       'Are you sure you want to delete the Address?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteAddress(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.address) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.address.id}</Text>
//         <Text testID="countryId">CountryId: {this.props.address.countryId}</Text>
//         <Text testID="regionId">RegionId: {this.props.address.regionId}</Text>
//         <Text testID="stateId">StateId: {this.props.address.stateId}</Text>
//         <Text testID="cityId">CityId: {this.props.address.cityId}</Text>
//         <Text testID="pincodeId">PincodeId: {this.props.address.pincodeId}</Text>
//         <Text testID="areaId">AreaId: {this.props.address.areaId}</Text>
//         <Text testID="addressLineOne">AddressLineOne: {this.props.address.addressLineOne}</Text>
//         <Text testID="addressLineTwo">AddressLineTwo: {this.props.address.addressLineTwo}</Text>
//         <Text testID="primary">Primary: {this.props.address.primary}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.address.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.address.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={addressEntityEditScreen.bind(this, { entityId: this.props.address.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     address: state.addresses.address,
//     deleting: state.addresses.deleting,
//     errorDeleting: state.addresses.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getAddress: id => dispatch(AddressActions.addressRequest(id)),
//     getAllAddresses: options => dispatch(AddressActions.addressAllRequest(options)),
//     deleteAddress: id => dispatch(AddressActions.addressDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AddressEntityDetailScreen)
