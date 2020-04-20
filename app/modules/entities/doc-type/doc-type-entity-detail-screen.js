// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { docTypeEntityEditScreen } from '../../../navigation/layouts'

// import DocTypeActions from './doc-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './doc-type-entity-detail-screen-style'

// class DocTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getDocType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllDocTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete DocType?',
//       'Are you sure you want to delete the DocType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteDocType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.docType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.docType.id}</Text>
//         <Text testID="name">Name: {this.props.docType.name}</Text>
//         <Text testID="code">Code: {this.props.docType.code}</Text>
//         <Text testID="active">Active: {this.props.docType.active}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.docType.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.docType.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={docTypeEntityEditScreen.bind(this, { entityId: this.props.docType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     docType: state.docTypes.docType,
//     deleting: state.docTypes.deleting,
//     errorDeleting: state.docTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getDocType: id => dispatch(DocTypeActions.docTypeRequest(id)),
//     getAllDocTypes: options => dispatch(DocTypeActions.docTypeAllRequest(options)),
//     deleteDocType: id => dispatch(DocTypeActions.docTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DocTypeEntityDetailScreen)
