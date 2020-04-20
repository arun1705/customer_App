import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import WalletTxActions from './wallet-tx.reducer'

export function* getWalletTx(api, action) {
  const { walletTxId } = action
  // make the call to the api
  const apiCall = call(api.getWalletTx, walletTxId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(WalletTxActions.walletTxSuccess(response.data))
  } else {
    yield put(WalletTxActions.walletTxFailure(response.data))
  }
}

export function* getWalletTxes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getWalletTxes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletTxActions.walletTxAllSuccess(response.data))
  } else {
    yield put(WalletTxActions.walletTxAllFailure(response.data))
  }
}

export function* updateWalletTx(api, action) {
  const { walletTx } = action
  // make the call to the api
  const idIsNotNull = !!walletTx.id
  const apiCall = call(idIsNotNull ? api.updateWalletTx : api.createWalletTx, walletTx)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(WalletTxActions.walletTxUpdateSuccess(response.data))
  } else {
    yield put(WalletTxActions.walletTxUpdateFailure(response.data))
  }
}

export function* searchWalletTxes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchWalletTxes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletTxActions.walletTxSearchSuccess(response.data))
  } else {
    yield put(WalletTxActions.walletTxSearchFailure(response.data))
  }
}
export function* deleteWalletTx(api, action) {
  const { walletTxId } = action
  // make the call to the api
  const apiCall = call(api.deleteWalletTx, walletTxId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(WalletTxActions.walletTxDeleteSuccess())
  } else {
    yield put(WalletTxActions.walletTxDeleteFailure(response.data))
  }
}
function mapDateFields(data) {
  if (data.requestedOn) {
    data.requestedOn = new Date(data.requestedOn)
  }
  if (data.initiatedOn) {
    data.initiatedOn = new Date(data.initiatedOn)
  }
  if (data.completedOn) {
    data.completedOn = new Date(data.completedOn)
  }
  return data
}
