import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { bankDetailsVerifyEntityEditScreen } from '../../../navigation/layouts'

import BankDetailsVerifyActions from './bank-details-verify.reducer'
import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
import styles from './bank-details-verify-entity-detail-screen-style'

class BankDetailsVerifyEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.props.getBankDetailsVerify(this.props.data.entityId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllBankDetailsVerifies()
        Navigation.pop(this.props.componentId)
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete BankDetailsVerify?',
      'Are you sure you want to delete the BankDetailsVerify?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deleteBankDetailsVerify(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    if (!this.props.bankDetailsVerify) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text>ID: {this.props.bankDetailsVerify.id}</Text>
        <Text testID="beneficiaryId">BeneficiaryId: {this.props.bankDetailsVerify.beneficiaryId}</Text>
        <Text testID="group">Group: {this.props.bankDetailsVerify.group}</Text>
        <Text testID="userName">UserName: {this.props.bankDetailsVerify.userName}</Text>
        <Text testID="phone">Phone: {this.props.bankDetailsVerify.phone}</Text>
        <Text testID="emailId">EmailId: {this.props.bankDetailsVerify.emailId}</Text>
        <Text testID="vpa">Vpa: {this.props.bankDetailsVerify.vpa}</Text>
        <Text testID="bankAccountNo">BankAccountNo: {this.props.bankDetailsVerify.bankAccountNo}</Text>
        <Text testID="ifsc">Ifsc: {this.props.bankDetailsVerify.ifsc}</Text>
        <Text testID="verified">Verified: {this.props.bankDetailsVerify.verified}</Text>
        <Text testID="userId">UserId: {this.props.bankDetailsVerify.userId}</Text>
        <Text testID="submittedOn">SubmittedOn: {String(this.props.bankDetailsVerify.submittedOn)}</Text>
        <Text testID="submittedBy">SubmittedBy: {this.props.bankDetailsVerify.submittedBy}</Text>
        <Text testID="verifiedOn">VerifiedOn: {String(this.props.bankDetailsVerify.verifiedOn)}</Text>
        <Text testID="verifiedBy">VerifiedBy: {this.props.bankDetailsVerify.verifiedBy}</Text>
        <RoundedButton text="Edit" onPress={bankDetailsVerifyEntityEditScreen.bind(this, { entityId: this.props.bankDetailsVerify.id })} />
        <RoundedButton text="Delete" onPress={this.confirmDelete} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    bankDetailsVerify: state.bankDetailsVerifies.bankDetailsVerify,
    deleting: state.bankDetailsVerifies.deleting,
    errorDeleting: state.bankDetailsVerifies.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBankDetailsVerify: id => dispatch(BankDetailsVerifyActions.bankDetailsVerifyRequest(id)),
    getAllBankDetailsVerifies: options => dispatch(BankDetailsVerifyActions.bankDetailsVerifyAllRequest(options)),
    deleteBankDetailsVerify: id => dispatch(BankDetailsVerifyActions.bankDetailsVerifyDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BankDetailsVerifyEntityDetailScreen)
