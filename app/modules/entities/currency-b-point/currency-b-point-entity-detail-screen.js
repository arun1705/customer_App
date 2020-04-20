// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { currencyBPointEntityEditScreen } from '../../../navigation/layouts'

// import CurrencyBPointActions from './currency-b-point.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './currency-b-point-entity-detail-screen-style'

// class CurrencyBPointEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCurrencyBPoint(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCurrencyBPoints()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete CurrencyBPoint?',
//       'Are you sure you want to delete the CurrencyBPoint?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCurrencyBPoint(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.currencyBPoint) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.currencyBPoint.id}</Text>
//         <Text testID="bPointvalue">BPointvalue: {this.props.currencyBPoint.bPointvalue}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.currencyBPoint.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.currencyBPoint.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.currencyBPoint.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.currencyBPoint.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.currencyBPoint.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={currencyBPointEntityEditScreen.bind(this, { entityId: this.props.currencyBPoint.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     currencyBPoint: state.currencyBPoints.currencyBPoint,
//     deleting: state.currencyBPoints.deleting,
//     errorDeleting: state.currencyBPoints.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCurrencyBPoint: id => dispatch(CurrencyBPointActions.currencyBPointRequest(id)),
//     getAllCurrencyBPoints: options => dispatch(CurrencyBPointActions.currencyBPointAllRequest(options)),
//     deleteCurrencyBPoint: id => dispatch(CurrencyBPointActions.currencyBPointDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CurrencyBPointEntityDetailScreen)
