// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { sbCatTypePointEntityEditScreen } from '../../../navigation/layouts'

// import SbCatTypePointActions from './sb-cat-type-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './sb-cat-type-point-entity-detail-screen-style'

// class SbCatTypePointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getSbCatTypePoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllSbCatTypePoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete SbCatTypePoint?',
//       'Are you sure you want to delete the SbCatTypePoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteSbCatTypePoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.sbCatTypePoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.sbCatTypePoint.id}</Text>
//         <Text testID="pointCount">PointCount: {this.props.sbCatTypePoint.pointCount}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.sbCatTypePoint.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.sbCatTypePoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.sbCatTypePoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.sbCatTypePoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.sbCatTypePoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={sbCatTypePointEntityEditScreen.bind(this, { entityId: this.props.sbCatTypePoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     sbCatTypePoint: state.sbCatTypePoints.sbCatTypePoint,
//     deleting: state.sbCatTypePoints.deleting,
//     errorDeleting: state.sbCatTypePoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getSbCatTypePoint: id => dispatch(SbCatTypePointActions.sbCatTypePointRequest(id)),
//     getAllSbCatTypePoints: options => dispatch(SbCatTypePointActions.sbCatTypePointAllRequest(options)),
//     deleteSbCatTypePoint: id => dispatch(SbCatTypePointActions.sbCatTypePointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SbCatTypePointEntityDetailScreen)
