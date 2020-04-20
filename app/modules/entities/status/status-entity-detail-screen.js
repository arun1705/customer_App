// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { statusEntityEditScreen } from '../../../navigation/layouts'

// import StatusActions from './status.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './status-entity-detail-screen-style'

// class StatusEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getStatus(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllStatuses()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Status?',
//       'Are you sure you want to delete the Status?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteStatus(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.status) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.status.id}</Text>
//         <Text testID="ename">Ename: {this.props.status.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.status.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.status.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.status.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.status.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.status.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.status.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={statusEntityEditScreen.bind(this, { entityId: this.props.status.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     status: state.statuses.status,
//     deleting: state.statuses.deleting,
//     errorDeleting: state.statuses.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getStatus: id => dispatch(StatusActions.statusRequest(id)),
//     getAllStatuses: options => dispatch(StatusActions.statusAllRequest(options)),
//     deleteStatus: id => dispatch(StatusActions.statusDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(StatusEntityDetailScreen)
