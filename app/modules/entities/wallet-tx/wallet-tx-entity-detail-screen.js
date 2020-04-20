import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { walletTxEntityEditScreen } from '../../../navigation/layouts'

import WalletTxActions from './wallet-tx.reducer'
import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
import styles from './wallet-tx-entity-detail-screen-style'

class WalletTxEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.props.getWalletTx(this.props.data.entityId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllWalletTxes()
        Navigation.pop(this.props.componentId)
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete WalletTx?',
      'Are you sure you want to delete the WalletTx?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deleteWalletTx(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    if (!this.props.walletTx) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text>ID: {this.props.walletTx.id}</Text>
        <Text testID="userId">UserId: {this.props.walletTx.userId}</Text>
        <Text testID="txId">TxId: {this.props.walletTx.txId}</Text>
        <Text testID="txUUID">TxUUID: {this.props.walletTx.txUUID}</Text>
        <Text testID="benificiaryId">BenificiaryId: {this.props.walletTx.benificiaryId}</Text>
        <Text testID="amount">Amount: {this.props.walletTx.amount}</Text>
        <Text testID="prevBalance">PrevBalance: {this.props.walletTx.prevBalance}</Text>
        <Text testID="newBalance">NewBalance: {this.props.walletTx.newBalance}</Text>
        <Text testID="txType">TxType: {this.props.walletTx.txType}</Text>
        <Text testID="txMode">TxMode: {this.props.walletTx.txMode}</Text>
        <Text testID="status">Status: {this.props.walletTx.status}</Text>
        <Text testID="statusCode">StatusCode: {this.props.walletTx.statusCode}</Text>
        <Text testID="statusMessage">StatusMessage: {this.props.walletTx.statusMessage}</Text>
        <Text testID="txPurpose">TxPurpose: {this.props.walletTx.txPurpose}</Text>
        <Text testID="requestedOn">RequestedOn: {String(this.props.walletTx.requestedOn)}</Text>
        <Text testID="initiatedOn">InitiatedOn: {String(this.props.walletTx.initiatedOn)}</Text>
        <Text testID="completedOn">CompletedOn: {String(this.props.walletTx.completedOn)}</Text>
        <RoundedButton text="Edit" onPress={walletTxEntityEditScreen.bind(this, { entityId: this.props.walletTx.id })} />
        <RoundedButton text="Delete" onPress={this.confirmDelete} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    walletTx: state.walletTxes.walletTx,
    deleting: state.walletTxes.deleting,
    errorDeleting: state.walletTxes.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWalletTx: id => dispatch(WalletTxActions.walletTxRequest(id)),
    getAllWalletTxes: options => dispatch(WalletTxActions.walletTxAllRequest(options)),
    deleteWalletTx: id => dispatch(WalletTxActions.walletTxDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletTxEntityDetailScreen)
