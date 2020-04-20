// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { currencyEntityEditScreen } from '../../../navigation/layouts'

// import CurrencyActions from './currency.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './currency-entity-detail-screen-style'

// class CurrencyEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCurrency(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCurrencies()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Currency?',
//       'Are you sure you want to delete the Currency?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCurrency(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.currency) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.currency.id}</Text>
//         <Text testID="ename">Ename: {this.props.currency.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.currency.ecode}</Text>
//         <Text testID="currValue">CurrValue: {this.props.currency.currValue}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.currency.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.currency.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.currency.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.currency.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.currency.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={currencyEntityEditScreen.bind(this, { entityId: this.props.currency.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     currency: state.currencies.currency,
//     deleting: state.currencies.deleting,
//     errorDeleting: state.currencies.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCurrency: id => dispatch(CurrencyActions.currencyRequest(id)),
//     getAllCurrencies: options => dispatch(CurrencyActions.currencyAllRequest(options)),
//     deleteCurrency: id => dispatch(CurrencyActions.currencyDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CurrencyEntityDetailScreen)
