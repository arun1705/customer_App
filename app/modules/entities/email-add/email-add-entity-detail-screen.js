// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { emailAddEntityEditScreen } from '../../../navigation/layouts'

// import EmailAddActions from './email-add.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './email-add-entity-detail-screen-style'

// class EmailAddEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getEmailAdd(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllEmailAdds()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete EmailAdd?',
//       'Are you sure you want to delete the EmailAdd?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteEmailAdd(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.emailAdd) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.emailAdd.id}</Text>
//         <Text testID="emailAdd">EmailAdd: {this.props.emailAdd.emailAdd}</Text>
//         <Text testID="primary">Primary: {this.props.emailAdd.primary}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.emailAdd.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.emailAdd.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={emailAddEntityEditScreen.bind(this, { entityId: this.props.emailAdd.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     emailAdd: state.emailAdds.emailAdd,
//     deleting: state.emailAdds.deleting,
//     errorDeleting: state.emailAdds.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getEmailAdd: id => dispatch(EmailAddActions.emailAddRequest(id)),
//     getAllEmailAdds: options => dispatch(EmailAddActions.emailAddAllRequest(options)),
//     deleteEmailAdd: id => dispatch(EmailAddActions.emailAddDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EmailAddEntityDetailScreen)
