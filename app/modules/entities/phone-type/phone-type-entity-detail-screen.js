// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { phoneTypeEntityEditScreen } from '../../../navigation/layouts'

// import PhoneTypeActions from './phone-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './phone-type-entity-detail-screen-style'

// class PhoneTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getPhoneType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllPhoneTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete PhoneType?',
//       'Are you sure you want to delete the PhoneType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deletePhoneType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.phoneType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.phoneType.id}</Text>
//         <Text testID="ename">Ename: {this.props.phoneType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.phoneType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.phoneType.activeValue}</Text>
//         <RoundedButton text="Edit" onPress={phoneTypeEntityEditScreen.bind(this, { entityId: this.props.phoneType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     phoneType: state.phoneTypes.phoneType,
//     deleting: state.phoneTypes.deleting,
//     errorDeleting: state.phoneTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhoneType: id => dispatch(PhoneTypeActions.phoneTypeRequest(id)),
//     getAllPhoneTypes: options => dispatch(PhoneTypeActions.phoneTypeAllRequest(options)),
//     deletePhoneType: id => dispatch(PhoneTypeActions.phoneTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(PhoneTypeEntityDetailScreen)
