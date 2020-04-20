// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { pincodeEntityEditScreen } from '../../../navigation/layouts'

// import PincodeActions from './pincode.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './pincode-entity-detail-screen-style'

// class PincodeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getPincode(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllPincodes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Pincode?',
//       'Are you sure you want to delete the Pincode?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deletePincode(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.pincode) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.pincode.id}</Text>
//         <Text testID="ecode">Ecode: {this.props.pincode.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.pincode.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.pincode.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.pincode.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.pincode.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.pincode.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={pincodeEntityEditScreen.bind(this, { entityId: this.props.pincode.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     pincode: state.pincodes.pincode,
//     deleting: state.pincodes.deleting,
//     errorDeleting: state.pincodes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPincode: id => dispatch(PincodeActions.pincodeRequest(id)),
//     getAllPincodes: options => dispatch(PincodeActions.pincodeAllRequest(options)),
//     deletePincode: id => dispatch(PincodeActions.pincodeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PincodeEntityDetailScreen)
