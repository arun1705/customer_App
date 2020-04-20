// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { docSubTypeEntityEditScreen } from '../../../navigation/layouts'

// import DocSubTypeActions from './doc-sub-type.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './doc-sub-type-entity-detail-screen-style'

// class DocSubTypeEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getDocSubType(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllDocSubTypes()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete DocSubType?',
//       'Are you sure you want to delete the DocSubType?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteDocSubType(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.docSubType) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.docSubType.id}</Text>
//         <Text testID="name">Name: {this.props.docSubType.name}</Text>
//         <Text testID="code">Code: {this.props.docSubType.code}</Text>
//         <Text testID="active">Active: {this.props.docSubType.active}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.docSubType.createdOn)}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.docSubType.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={docSubTypeEntityEditScreen.bind(this, { entityId: this.props.docSubType.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     docSubType: state.docSubTypes.docSubType,
//     deleting: state.docSubTypes.deleting,
//     errorDeleting: state.docSubTypes.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getDocSubType: id => dispatch(DocSubTypeActions.docSubTypeRequest(id)),
//     getAllDocSubTypes: options => dispatch(DocSubTypeActions.docSubTypeAllRequest(options)),
//     deleteDocSubType: id => dispatch(DocSubTypeActions.docSubTypeDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(DocSubTypeEntityDetailScreen)
