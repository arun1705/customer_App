import React from 'react'
import { Alert, ScrollView, Text, View, Linking } from 'react-native'
import { connect } from 'react-redux'
import WalletActions from './wallet.reducer'
import PancardVerifyActions from '../pancard-verify/pancard-verify.reducer'
import BankDetailsVerifyActions from '../bank-details-verify/bank-details-verify.reducer'
import { Card, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../../shared/themes/colors'
import styles from './wallet-entity-edit-screen-style'
import { TextInput as TextInputPaper, Button, HelperText, ActivityIndicator } from 'react-native-paper'
import { Colors } from '../../../shared/themes'
import { validateOnlyNumbersExceptDot } from '../../../shared/res/Validate'

class WalletEntityEditScreen extends React.Component {
  constructor(props) {
    super(props)
    this.amountErrorMsg = ''
    this.state = {
      value: 0.0,
      amount: '',
      refresh: true,
      isButtonDisabled: false,
    }
    // this.formChange = this.formChange.bind(this)
  }

  componentDidMount() {
    if (this.props.account) {
      this.props.getWallet(this.props.account.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        if (this.props.error.status === 400) {
          Alert.alert('Error', this.props.error.title, [{ text: 'OK' }])
        } else {
          Alert.alert('Error', 'Something went wrong while raising your request, try again after some time', [{ text: 'OK' }])
        }
      } else {
        this.setState({ amount: '' })
        Alert.alert('Success', 'Your request for the withdrawal has been raised, kindly check your transaction for details ', [
          { text: 'OK' },
        ])
      }
    }
  }

  handlePressPointsTransactions = () => {
    this.props.navigation.navigate('transaction-details')
  }

  // handlePressCashTransactions = () => {
  //   this.props.navigation.navigate('UserCashTranDetailScreen')
  // }

  refresh() {
    this.setState(prevState => ({
      refresh: !prevState.refresh,
    }))
  }

  handlePressWithdraw = () => {
    // Linking.openURL('https://www.flipkart.com/')

    const { amount } = this.state
    this.validation = true
    if (amount === '' || amount === 0) {
      this.validation = false
      this.amountErrorMsg = 'Please Enter Amount'
    } else if (!validateOnlyNumbersExceptDot(amount)) {
      this.validation = false
      this.amountErrorMsg = 'Please Enter Valid Amount'
    } else if (amount < 150) {
      this.validation = false
      this.amountErrorMsg = 'Minimum redemption is 150'
    }

    if (this.validation) {
      this.setState({
        isButtonDisabled: true,
      })

      // **** here's the timeout ****
      setTimeout(() => this.setState({ isButtonDisabled: false }), 5000)

      const withdrawObj = {
        walletId: this.props.wallet ? this.props.wallet.id : 0,
        userId: this.props.wallet ? this.props.wallet.userId : 0,
        amount,
      }

      this.props.withdrawRequest(withdrawObj)
    } else {
      this.refresh()
    }
  }

  render() {
    if (this.props.fetching) {
      return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
          <ActivityIndicator animating={true} color={Colors.background} size="large" style={{ flex: 1, paddingTop: 50 }} />
        </ScrollView>
      )
    }
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <Card containerStyle={styles.containerStyle}>
            <View style={styles.viewStyle}>
              <Text style={styles.totalbalance}>WALLET BALANCE</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.balanceText}>Rs. {this.props.wallet ? this.props.wallet.balance.toFixed(2) : '0'}</Text>
            </View>

            <View style={styles.lineStyle} />

            <View style={styles.textInput}>
              <TextInputPaper
                underlineColor="green"
                mode="outlined"
                keyboardType="numeric"
                theme={{ colors: { primary: Colors.textField, background: Colors.snow, placeholder: Colors.textField } }}
                label="Enter amount"
                onChangeText={amount => {
                  this.setState({ amount })
                  this.amountErrorMsg = ''
                }}
                value={this.state.amount}
                error={this.amountErrorMsg}
              />
              {this.validation && this.amountErrorMsg ? null : (
                <HelperText type="error" visible={!this.validation}>
                  {this.amountErrorMsg}
                </HelperText>
              )}
            </View>

            <Button
              mode="contained"
              uppercase="false"
              color={colors.background}
              disabled={this.props.fetching || this.state.isButtonDisabled}
              style={styles.buttonWrapper}
              onPress={this.handlePressWithdraw}>
              <Text>Withdraw</Text>
            </Button>
            <Text style={styles.minimumRedemptionText}>Minimum redemption amount is 150Rs.</Text>
          </Card>

          <Card containerStyle={styles.containerStyle}>
            <TouchableOpacity onPress={this.handlePressPointsTransactions}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>My Recent Transactions</Text>
                <Icon name="angle-right" type="font-awesome" color="#17661e" size={22} />
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    pancardVerifies: state.pancardVerifies.pancardVerifies || [],
    bankDetailsVerifies: state.bankDetailsVerifies.bankDetailsVerifies || [],
    wallet: state.wallets.wallet,
    fetching: state.wallets.fetchingOne,
    updating: state.wallets.updating,
    account: state.account.account,
    error: state.wallets.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPancardVerifies: options => dispatch(PancardVerifyActions.pancardVerifyAllRequest(options)),
    getAllBankDetailsVerifies: options => dispatch(BankDetailsVerifyActions.bankDetailsVerifyAllRequest(options)),
    getWallet: id => dispatch(WalletActions.walletRequest(id)),
    getAllWallets: options => dispatch(WalletActions.walletAllRequest(options)),
    withdrawRequest: options => dispatch(WalletActions.walletUpdateRequest(options)),
    updateWallet: wallet => dispatch(WalletActions.walletUpdateRequest(wallet)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletEntityEditScreen)
