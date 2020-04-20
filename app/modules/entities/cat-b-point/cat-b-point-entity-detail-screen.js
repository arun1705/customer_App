// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { catBPointEntityEditScreen } from '../../../navigation/layouts'

// import CatBPointActions from './cat-b-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './cat-b-point-entity-detail-screen-style'

// class CatBPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCatBPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCatBPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete CatBPoint?',
//       'Are you sure you want to delete the CatBPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCatBPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.catBPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.catBPoint.id}</Text>
//         <Text testID="bPointCount">BPointCount: {this.props.catBPoint.bPointCount}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.catBPoint.activeValue}</Text>
//         <Text testID="startDate">StartDate: {String(this.props.catBPoint.startDate)}</Text>
//         <Text testID="endDate">EndDate: {String(this.props.catBPoint.endDate)}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.catBPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.catBPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.catBPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.catBPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={catBPointEntityEditScreen.bind(this, { entityId: this.props.catBPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     catBPoint: state.catBPoints.catBPoint,
//     deleting: state.catBPoints.deleting,
//     errorDeleting: state.catBPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCatBPoint: id => dispatch(CatBPointActions.catBPointRequest(id)),
//     getAllCatBPoints: options => dispatch(CatBPointActions.catBPointAllRequest(options)),
//     deleteCatBPoint: id => dispatch(CatBPointActions.catBPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CatBPointEntityDetailScreen)
