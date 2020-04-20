// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { currencyPointEntityEditScreen } from '../../../navigation/layouts'

// import CurrencyPointActions from './currency-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './currency-point-entity-detail-screen-style'

// class CurrencyPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCurrencyPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCurrencyPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete CurrencyPoint?',
//       'Are you sure you want to delete the CurrencyPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCurrencyPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.currencyPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.currencyPoint.id}</Text>
//         <Text testID="pointValue">PointValue: {this.props.currencyPoint.pointValue}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.currencyPoint.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.currencyPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.currencyPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.currencyPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.currencyPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={currencyPointEntityEditScreen.bind(this, { entityId: this.props.currencyPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     currencyPoint: state.currencyPoints.currencyPoint,
//     deleting: state.currencyPoints.deleting,
//     errorDeleting: state.currencyPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCurrencyPoint: id => dispatch(CurrencyPointActions.currencyPointRequest(id)),
//     getAllCurrencyPoints: options => dispatch(CurrencyPointActions.currencyPointAllRequest(options)),
//     deleteCurrencyPoint: id => dispatch(CurrencyPointActions.currencyPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CurrencyPointEntityDetailScreen)
