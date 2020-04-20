import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { pancardVerifyEntityEditScreen } from '../../../navigation/layouts'

import PancardVerifyActions from './pancard-verify.reducer'
import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
import styles from './pancard-verify-entity-detail-screen-style'

class PancardVerifyEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.props.getPancardVerify(this.props.data.entityId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllPancardVerifies()
        Navigation.pop(this.props.componentId)
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete PancardVerify?',
      'Are you sure you want to delete the PancardVerify?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deletePancardVerify(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    if (!this.props.pancardVerify) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text>ID: {this.props.pancardVerify.id}</Text>
        <Text testID="parcardNo">ParcardNo: {this.props.pancardVerify.parcardNo}</Text>
        <Text testID="nameOnPacard">NameOnPacard: {this.props.pancardVerify.nameOnPacard}</Text>
        <Text testID="pancardUrl">PancardUrl: {this.props.pancardVerify.pancardUrl}</Text>
        <Text testID="displayName">DisplayName: {this.props.pancardVerify.displayName}</Text>
        <Text testID="verified">Verified: {this.props.pancardVerify.verified}</Text>
        <Text testID="submittedOn">SubmittedOn: {String(this.props.pancardVerify.submittedOn)}</Text>
        <Text testID="submittedBy">SubmittedBy: {this.props.pancardVerify.submittedBy}</Text>
        <Text testID="userId">UserId: {this.props.pancardVerify.userId}</Text>
        <Text testID="verifiedOn">VerifiedOn: {String(this.props.pancardVerify.verifiedOn)}</Text>
        <Text testID="verifiedBy">VerifiedBy: {this.props.pancardVerify.verifiedBy}</Text>
        <RoundedButton text="Edit" onPress={pancardVerifyEntityEditScreen.bind(this, { entityId: this.props.pancardVerify.id })} />
        <RoundedButton text="Delete" onPress={this.confirmDelete} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    pancardVerify: state.pancardVerifies.pancardVerify,
    deleting: state.pancardVerifies.deleting,
    errorDeleting: state.pancardVerifies.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPancardVerify: id => dispatch(PancardVerifyActions.pancardVerifyRequest(id)),
    getAllPancardVerifies: options => dispatch(PancardVerifyActions.pancardVerifyAllRequest(options)),
    deletePancardVerify: id => dispatch(PancardVerifyActions.pancardVerifyDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PancardVerifyEntityDetailScreen)
