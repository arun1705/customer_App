// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { sbCatBPointEntityEditScreen } from '../../../navigation/layouts'

// import SbCatBPointActions from './sb-cat-b-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sb-cat-b-point-entity-detail-screen-style'

// class SbCatBPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSbCatBPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatBPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SbCatBPoint?',
//       'Are you sure you want to delete the SbCatBPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSbCatBPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.sbCatBPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.sbCatBPoint.id}</Text>
//         <Text testID="bPointCount">BPointCount: {this.props.sbCatBPoint.bPointCount}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.sbCatBPoint.activeValue}</Text>
//         <Text testID="startDate">StartDate: {String(this.props.sbCatBPoint.startDate)}</Text>
//         <Text testID="endDate">EndDate: {String(this.props.sbCatBPoint.endDate)}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.sbCatBPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.sbCatBPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.sbCatBPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.sbCatBPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={sbCatBPointEntityEditScreen.bind(this, { entityId: this.props.sbCatBPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     sbCatBPoint: state.sbCatBPoints.sbCatBPoint,
//     deleting: state.sbCatBPoints.deleting,
//     errorDeleting: state.sbCatBPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSbCatBPoint: id => dispatch(SbCatBPointActions.sbCatBPointRequest(id)),
//     getAllSbCatBPoints: options => dispatch(SbCatBPointActions.sbCatBPointAllRequest(options)),
//     deleteSbCatBPoint: id => dispatch(SbCatBPointActions.sbCatBPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatBPointEntityDetailScreen)
