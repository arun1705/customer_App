// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { emailTypeEntityEditScreen } from '../../../navigation/layouts'

// import EmailTypeActions from './email-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './email-type-entity-detail-screen-style'

// class EmailTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getEmailType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllEmailTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete EmailType?',
//       'Are you sure you want to delete the EmailType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteEmailType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.emailType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.emailType.id}</Text>
//         <Text testID="ename">Ename: {this.props.emailType.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.emailType.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.emailType.activeValue}</Text>
//         <RoundedButton text="Edit" onPress={emailTypeEntityEditScreen.bind(this, { entityId: this.props.emailType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     emailType: state.emailTypes.emailType,
//     deleting: state.emailTypes.deleting,
//     errorDeleting: state.emailTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getEmailType: id => dispatch(EmailTypeActions.emailTypeRequest(id)),
//     getAllEmailTypes: options => dispatch(EmailTypeActions.emailTypeAllRequest(options)),
//     deleteEmailType: id => dispatch(EmailTypeActions.emailTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EmailTypeEntityDetailScreen)
