// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { stateEntityEditScreen } from '../../../navigation/layouts'

// import StateActions from './state.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './state-entity-detail-screen-style'

// class StateEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getState(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllStates()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete State?',
//       'Are you sure you want to delete the State?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteState(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.state) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.state.id}</Text>
//         <Text testID="ename">Ename: {this.props.state.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.state.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.state.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.state.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.state.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.state.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.state.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={stateEntityEditScreen.bind(this, { entityId: this.props.state.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     state: state.states.state,
//     deleting: state.states.deleting,
//     errorDeleting: state.states.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getState: id => dispatch(StateActions.stateRequest(id)),
//     getAllStates: options => dispatch(StateActions.stateAllRequest(options)),
//     deleteState: id => dispatch(StateActions.stateDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(StateEntityDetailScreen)
