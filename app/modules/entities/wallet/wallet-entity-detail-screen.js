import React from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import { walletEntityEditScreen } from '../../../navigation/layouts'

import WalletActions from './wallet.reducer'
import RoundedButton from '../../../shared/components/rounded-button/rounded-button'
import styles from './wallet-entity-detail-screen-style'

class WalletEntityDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.props.getWallet(this.props.data.entityId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deleting && !this.props.deleting) {
      if (this.props.errorDeleting) {
        Alert.alert('Error', 'Something went wrong deleting the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllWallets()
        Navigation.pop(this.props.componentId)
      }
    }
  }

  confirmDelete = () => {
    Alert.alert(
      'Delete Wallet?',
      'Are you sure you want to delete the Wallet?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            this.props.deleteWallet(this.props.data.entityId)
          },
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    if (!this.props.wallet) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <Text>ID: {this.props.wallet.id}</Text>
        <Text testID="userId">UserId: {this.props.wallet.userId}</Text>
        <Text testID="walletUUID">WalletUUID: {this.props.wallet.walletUUID}</Text>
        <Text testID="balance">Balance: {this.props.wallet.balance}</Text>
        <Text testID="bankVerified">BankVerified: {this.props.wallet.bankVerified}</Text>
        <Text testID="pancardVerified">PancardVerified: {this.props.wallet.pancardVerified}</Text>
        <Text testID="createdOn">CreatedOn: {String(this.props.wallet.createdOn)}</Text>
        <Text testID="modifiedOn">ModifiedOn: {String(this.props.wallet.modifiedOn)}</Text>
        <Text testID="modifiedBy">ModifiedBy: {this.props.wallet.modifiedBy}</Text>
        <RoundedButton text="Edit" onPress={walletEntityEditScreen.bind(this, { entityId: this.props.wallet.id })} />
        <RoundedButton text="Delete" onPress={this.confirmDelete} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.wallets.wallet,
    deleting: state.wallets.deleting,
    errorDeleting: state.wallets.errorDeleting,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWallet: id => dispatch(WalletActions.walletRequest(id)),
    getAllWallets: options => dispatch(WalletActions.walletAllRequest(options)),
    deleteWallet: id => dispatch(WalletActions.walletDeleteRequest(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletEntityDetailScreen)
