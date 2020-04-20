// import React from 'react'
// import { Alert, ScrollView, Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { Navigation } from 'react-native-navigation'
// import { areaEntityEditScreen } from '../../../navigation/layouts'

// import AreaActions from './area.reducer'
// import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
// import styles from './area-entity-detail-screen-style'

// class AreaEntityDetailScreen extends React.Component {
//   constructor(props) {
//     super(props)
//     Navigation.events().bindComponent(this)
//     this.props.getArea(this.props.data.entityId)
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.deleting && !this.props.deleting) {
//       if (this.props.errorDeleting) {
//         Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
//       } else {
//         this.props.getAllAreas()
//         Navigation.pop(this.props.componentId)
//       }
//     }
//   }

//   confirmDelete = () => {
//     Alert.alert(
//       'Delete Area?',
//       'Are you sure you want to delete the Area?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'OK',
//           onPress: () => {
//             this.props.deleteArea(this.props.data.entityId)
//           },
//         },
//       ],
//       { cancelable: false },
//     )
//   }

//   render() {
//     if (!this.props.area) {
//       return (
//         <View>
//           <Text>Loading...</Text>
//         </View>
//       )
//     }
//     return (
//       <ScrollView style={styles.container}>
//         <Text>ID: {this.props.area.id}</Text>
//         <Text testID="ename">Ename: {this.props.area.ename}</Text>
//         <Text testID="ecode">Ecode: {this.props.area.ecode}</Text>
//         <Text testID="activeValue">ActiveValue: {this.props.area.activeValue}</Text>
//         <Text testID="createdBy">CreatedBy: {this.props.area.createdBy}</Text>
//         <Text testID="createdOn">CreatedOn: {String(this.props.area.createdOn)}</Text>
//         <Text testID="modifiedBy">ModifiedBy: {this.props.area.modifiedBy}</Text>
//         <Text testID="modifiedOn">ModifiedOn: {String(this.props.area.modifiedOn)}</Text>
//         <RoundedButton text="Edit" onPress={areaEntityEditScreen.bind(this, { entityId: this.props.area.id })} />
//         <RoundedButton text="Delete" onPress={this.confirmDelete} />
//       </ScrollView>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     area: state.areas.area,
//     deleting: state.areas.deleting,
//     errorDeleting: state.areas.errorDeleting,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getArea: id => dispatch(AreaActions.areaRequest(id)),
//     getAllAreas: options => dispatch(AreaActions.areaAllRequest(options)),
//     deleteArea: id => dispatch(AreaActions.areaDeleteRequest(id)),
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(AreaEntityDetailScreen)
