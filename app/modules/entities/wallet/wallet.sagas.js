import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import WalletActions from './wallet.reducer'

export function* getWallet(api, action) {
  const { walletId } = action
  console.log(111)
  // make the call to the api
  const apiCall = call(api.getWallet, walletId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(WalletActions.walletSuccess(response.data))
  } else {
    yield put(WalletActions.walletFailure(response.data))
  }
}

export function* getWallets(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getWallets, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletActions.walletAllSuccess(response.data))
  } else {
    yield put(WalletActions.walletAllFailure(response.data))
  }
}

export function* withdrawWallet(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.withdrawWallet, options)
  
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletActions.walletWithdrawSuccess(response.data))
  } else {
    yield put(WalletActions.walletWithdrawFailure(response.data))
  }
}

export function* updateWallet(api, action) {
  const { options } = action
  console.log(options)
  // make the call to the api
  const apiCall = call(api.withdrawWallet, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(WalletActions.walletUpdateSuccess(response.data))
  } else {
    yield put(WalletActions.walletUpdateFailure(response.data))
  }
}

export function* searchWallets(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchWallets, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletActions.walletSearchSuccess(response.data))
  } else {
    yield put(WalletActions.walletSearchFailure(response.data))
  }
}
export function* deleteWallet(api, action) {
  const { walletId } = action
  // make the call to the api
  const apiCall = call(api.deleteWallet, walletId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletActions.walletDeleteSuccess())
  } else {
    yield put(WalletActions.walletDeleteFailure(response.data))
  }
}
function mapDateFields(data) {
  if (data.createdOn) {
    data.createdOn = new Date(data.createdOn)
  }
  if (data.modifiedOn) {
    data.modifiedOn = new Date(data.modifiedOn)
  }
  return data
}
