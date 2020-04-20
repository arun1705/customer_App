// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { sbCatTypeBPointEntityEditScreen } from '../../../navigation/layouts'

// import SbCatTypeBPointActions from './sb-cat-type-b-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sb-cat-type-b-point-entity-detail-screen-style'

// class SbCatTypeBPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSbCatTypeBPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatTypeBPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SbCatTypeBPoint?',
//       'Are you sure you want to delete the SbCatTypeBPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSbCatTypeBPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.sbCatTypeBPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.sbCatTypeBPoint.id}</Text>
//         <Text testID="bPointCount">BPointCount: {this.props.sbCatTypeBPoint.bPointCount}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.sbCatTypeBPoint.activeValue}</Text>
//         <Text testID="startDate">StartDate: {String(this.props.sbCatTypeBPoint.startDate)}</Text>
//         <Text testID="endDate">EndDate: {String(this.props.sbCatTypeBPoint.endDate)}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.sbCatTypeBPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.sbCatTypeBPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.sbCatTypeBPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.sbCatTypeBPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={sbCatTypeBPointEntityEditScreen.bind(this, { entityId: this.props.sbCatTypeBPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     sbCatTypeBPoint: state.sbCatTypeBPoints.sbCatTypeBPoint,
//     deleting: state.sbCatTypeBPoints.deleting,
//     errorDeleting: state.sbCatTypeBPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSbCatTypeBPoint: id => dispatch(SbCatTypeBPointActions.sbCatTypeBPointRequest(id)),
//     getAllSbCatTypeBPoints: options => dispatch(SbCatTypeBPointActions.sbCatTypeBPointAllRequest(options)),
//     deleteSbCatTypeBPoint: id => dispatch(SbCatTypeBPointActions.sbCatTypeBPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatTypeBPointEntityDetailScreen)
