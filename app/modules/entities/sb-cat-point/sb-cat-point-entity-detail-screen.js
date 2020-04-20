// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { sbCatPointEntityEditScreen } from '../../../navigation/layouts'

// import SbCatPointActions from './sb-cat-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sb-cat-point-entity-detail-screen-style'

// class SbCatPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSbCatPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SbCatPoint?',
//       'Are you sure you want to delete the SbCatPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSbCatPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.sbCatPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.sbCatPoint.id}</Text>
//         <Text testID="pointCount">PointCount: {this.props.sbCatPoint.pointCount}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.sbCatPoint.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.sbCatPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.sbCatPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.sbCatPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.sbCatPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={sbCatPointEntityEditScreen.bind(this, { entityId: this.props.sbCatPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     sbCatPoint: state.sbCatPoints.sbCatPoint,
//     deleting: state.sbCatPoints.deleting,
//     errorDeleting: state.sbCatPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSbCatPoint: id => dispatch(SbCatPointActions.sbCatPointRequest(id)),
//     getAllSbCatPoints: options => dispatch(SbCatPointActions.sbCatPointAllRequest(options)),
//     deleteSbCatPoint: id => dispatch(SbCatPointActions.sbCatPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatPointEntityDetailScreen)
