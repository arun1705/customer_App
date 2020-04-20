// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { statusTypeEntityEditScreen } from '../../../navigation/layouts'

// import StatusTypeActions from './status-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './status-type-entity-detail-screen-style'

// class StatusTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getStatusType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllStatusTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete StatusType?',
//       'Are you sure you want to delete the StatusType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteStatusType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.statusType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.statusType.id}</Text>
//         <Text testID="ename">Ename: {this.props.statusType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.statusType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.statusType.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.statusType.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.statusType.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.statusType.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.statusType.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={statusTypeEntityEditScreen.bind(this, { entityId: this.props.statusType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     statusType: state.statusTypes.statusType,
//     deleting: state.statusTypes.deleting,
//     errorDeleting: state.statusTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getStatusType: id => dispatch(StatusTypeActions.statusTypeRequest(id)),
//     getAllStatusTypes: options => dispatch(StatusTypeActions.statusTypeAllRequest(options)),
//     deleteStatusType: id => dispatch(StatusTypeActions.statusTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(StatusTypeEntityDetailScreen)
