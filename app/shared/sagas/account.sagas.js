import { call, put } from 'redux-saga/effects'

import AccountActions, { CUSTOMER } from '../reducers/account.reducer'
import { callApi } from './call-api.saga'
import { CommonActions } from '@react-navigation/native'
import { Alert } from 'react-native'

// attempts to account
export function* getAccount(api) {
  const response = yield call(api.getAccount)

  // success?
  if (response.ok && response.headers['content-type'].indexOf('json') !== -1) {
    console.tron.log('Account - OK')
    console.log("....",response.data.authorities[0])
    if (response.data.authorities[0] === CUSTOMER) {
      yield put(AccountActions.accountSuccess(response.data))
      CommonActions.navigate('Home')
    } else {
      console.log('Account - FAIL')
      yield put(AccountActions.accountFailure('Failed to get account'))
    }
  } else {
    console.tron.log('Account - FAIL')
    yield put(AccountActions.accountFailure((response.data && response.data.detail) || 'Failed to get account'))
  }
}



// attempts to update account settings
export function* updateAccount(api, action) {
  const { account } = action
  const apiCall = call(api.updateAccount, account)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    console.tron.log('AccountUpdate - OK')
    yield put(AccountActions.accountUpdateSuccess())
  } else {
    console.tron.log('AccountUpdate - FAIL')
    yield put(AccountActions.accountUpdateFailure((response.data && response.data.detail) || 'Failed to update account'))
  }
}
