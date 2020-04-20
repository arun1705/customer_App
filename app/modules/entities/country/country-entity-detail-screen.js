// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { countryEntityEditScreen } from '../../../navigation/layouts'

// import CountryActions from './country.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './country-entity-detail-screen-style'

// class CountryEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCountry(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCountries()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Country?',
//       'Are you sure you want to delete the Country?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCountry(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.country) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.country.id}</Text>
//         <Text testID="ename">Ename: {this.props.country.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.country.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.country.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.country.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.country.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.country.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.country.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={countryEntityEditScreen.bind(this, { entityId: this.props.country.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     country: state.countries.country,
//     deleting: state.countries.deleting,
//     errorDeleting: state.countries.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCountry: id => dispatch(CountryActions.countryRequest(id)),
//     getAllCountries: options => dispatch(CountryActions.countryAllRequest(options)),
//     deleteCountry: id => dispatch(CountryActions.countryDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CountryEntityDetailScreen)
