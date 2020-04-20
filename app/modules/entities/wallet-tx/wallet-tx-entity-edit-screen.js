import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import WalletTxActions from './wallet-tx.reducer'
import WalletActions from '../wallet/wallet.reducer'
import { Navigation } from 'react-native-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { walletTxEntityDetailScreen } from '../../../navigation/layouts'

import t from 'tcomb-form-native'

import styles from './wallet-tx-entity-edit-screen-style'

let Form = t.form.Form

class WalletTxEntityEditScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      formModel: t.struct({
        id: t.maybe(t.Number),
        userId: t.maybe(t.Number),
        txId: t.maybe(t.String),
        txUUID: t.maybe(t.String),
        benificiaryId: t.maybe(t.String),
        amount: t.maybe(t.Number),
        prevBalance: t.maybe(t.Number),
        newBalance: t.maybe(t.Number),
        txType: t.maybe(t.String),
        txMode: t.maybe(t.String),
        status: t.maybe(t.String),
        statusCode: t.maybe(t.String),
        statusMessage: t.maybe(t.String),
        txPurpose: t.maybe(t.String),
        requestedOn: t.maybe(t.Date),
        initiatedOn: t.maybe(t.Date),
        completedOn: t.maybe(t.Date),
        walletId: this.getWallets(),
      }),
      formValue: { id: null },
      formOptions: {
        fields: {
          id: {
            hidden: true,
          },
          walletId: {
            testID: 'walletIdInput',
            label: 'Wallet',
          },
          userId: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('txId').refs.input.focus(),
            testID: 'userIdInput',
          },
          txId: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('txUUID').refs.input.focus(),
            testID: 'txIdInput',
          },
          txUUID: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('benificiaryId').refs.input.focus(),
            testID: 'txUUIDInput',
          },
          benificiaryId: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('amount').refs.input.focus(),
            testID: 'benificiaryIdInput',
          },
          amount: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('prevBalance').refs.input.focus(),
            testID: 'amountInput',
          },
          prevBalance: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('newBalance').refs.input.focus(),
            testID: 'prevBalanceInput',
          },
          newBalance: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('txType').refs.input.focus(),
            testID: 'newBalanceInput',
          },
          txType: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('txMode').refs.input.focus(),
            testID: 'txTypeInput',
          },
          txMode: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('status').refs.input.focus(),
            testID: 'txModeInput',
          },
          status: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('statusCode').refs.input.focus(),
            testID: 'statusInput',
          },
          statusCode: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('statusMessage').refs.input.focus(),
            testID: 'statusCodeInput',
          },
          statusMessage: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('txPurpose').refs.input.focus(),
            testID: 'statusMessageInput',
          },
          txPurpose: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('requestedOn').refs.input.focus(),
            testID: 'txPurposeInput',
          },
          requestedOn: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('initiatedOn').refs.input.focus(),
            testID: 'requestedOnInput',
          },
          initiatedOn: {
            returnKeyType: 'next',
            onSubmitEditing: () => this.form.getComponent('completedOn').refs.input.focus(),
            testID: 'initiatedOnInput',
          },
          completedOn: {
            testID: 'completedOnInput',
          },
        },
      },
      walletTx: {},
      isNewEntity: true,
    }
    if (props.data && props.data.entityId) {
      this.state.isNewEntity = false
      this.props.getWalletTx(props.data.entityId)
    }
    this.props.getAllWallets()

    this.submitForm = this.submitForm.bind(this)
    this.formChange = this.formChange.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.walletTx !== prevState.walletTx && !prevState.isNewEntity) {
      return { formValue: entityToFormValue(nextProps.walletTx), walletTx: nextProps.walletTx }
    }
    return null
  }
  componentDidUpdate(prevProps) {
    if (prevProps.updating && !this.props.updating) {
      if (this.props.error) {
        Alert.alert('Error', 'Something went wrong updating the entity', [{ text: 'OK' }])
      } else {
        this.props.getAllWalletTxes({ page: 0, sort: 'id,asc', size: 20 })
        const entityId = this.props.walletTx.id
        const alertOptions = [{ text: 'OK' }]
        if (!this.state.formValue.id) {
          alertOptions.push({
            text: 'View',
            onPress: walletTxEntityDetailScreen.bind(this, { entityId }),
          })
        }
        Navigation.pop(this.props.componentId)
        Alert.alert('Success', 'Entity saved successfully', alertOptions)
      }
    }
  }

  getWallets = () => {
    const wallets = {}
    this.props.wallets.forEach(wallet => {
      wallets[wallet.id] = wallet.id ? wallet.id.toString() : wallet.id.toString()
    })
    return t.maybe(t.enums(wallets))
  }
  submitForm() {
    // call getValue() to get the values of the form
    const walletTx = this.form.getValue()
    if (walletTx) {
      // if validation fails, value will be null
      this.props.updateWalletTx(formValueToEntity(walletTx))
    }
  }

  formChange(newValue) {
    this.setState({
      formValue: newValue,
    })
  }

  render() {
    if (this.props.fetching) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container} testID="entityScrollView">
          <Form
            ref={c => {
              this.form = c
            }}
            type={this.state.formModel}
            options={this.state.formOptions}
            value={this.state.formValue}
            onChange={this.formChange}
          />
          <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor="#99d9f4" testID="submitButton">
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}
// convenience methods for customizing the mapping of the entity to/from the form value
const entityToFormValue = value => {
  if (!value) {
    return {}
  }
  return {
    id: value.id || null,
    userId: value.userId || null,
    txId: value.txId || null,
    txUUID: value.txUUID || null,
    benificiaryId: value.benificiaryId || null,
    amount: value.amount || null,
    prevBalance: value.prevBalance || null,
    newBalance: value.newBalance || null,
    txType: value.txType || null,
    txMode: value.txMode || null,
    status: value.status || null,
    statusCode: value.statusCode || null,
    statusMessage: value.statusMessage || null,
    txPurpose: value.txPurpose || null,
    requestedOn: value.requestedOn || null,
    initiatedOn: value.initiatedOn || null,
    completedOn: value.completedOn || null,
    walletId: value.walletId || null,
  }
}
const formValueToEntity = value => {
  const entity = {
    id: value.id || null,
    userId: value.userId || null,
    txId: value.txId || null,
    txUUID: value.txUUID || null,
    benificiaryId: value.benificiaryId || null,
    amount: value.amount || null,
    prevBalance: value.prevBalance || null,
    newBalance: value.newBalance || null,
    txType: value.txType || null,
    txMode: value.txMode || null,
    status: value.status || null,
    statusCode: value.statusCode || null,
    statusMessage: value.statusMessage || null,
    txPurpose: value.txPurpose || null,
    requestedOn: value.requestedOn || null,
    initiatedOn: value.initiatedOn || null,
    completedOn: value.completedOn || null,
    walletId: value.walletId || null,
  }
  return entity
}

const mapStateToProps = state => {
  return {
    wallets: state.wallets.wallets || [],
    walletTx: state.walletTxes.walletTx,
    fetching: state.walletTxes.fetchingOne,
    updating: state.walletTxes.updating,
    error: state.walletTxes.errorUpdating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllWallets: options => dispatch(WalletActions.walletAllRequest(options)),
    getWalletTx: id => dispatch(WalletTxActions.walletTxRequest(id)),
    getAllWalletTxes: options => dispatch(WalletTxActions.walletTxAllRequest(options)),
    updateWalletTx: walletTx => dispatch(WalletTxActions.walletTxUpdateRequest(walletTx)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletTxEntityEditScreen)
