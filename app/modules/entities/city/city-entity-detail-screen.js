// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { cityEntityEditScreen } from '../../../navigation/layouts'

// import CityActions from './city.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './city-entity-detail-screen-style'

// class CityEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getCity(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllCities()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete City?',
//       'Are you sure you want to delete the City?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteCity(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.city) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.city.id}</Text>
//         <Text testID="ename">Ename: {this.props.city.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.city.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.city.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.city.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.city.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.city.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.city.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={cityEntityEditScreen.bind(this, { entityId: this.props.city.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     city: state.cities.city,
//     deleting: state.cities.deleting,
//     errorDeleting: state.cities.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCity: id => dispatch(CityActions.cityRequest(id)),
//     getAllCities: options => dispatch(CityActions.cityAllRequest(options)),
//     deleteCity: id => dispatch(CityActions.cityDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CityEntityDetailScreen)
