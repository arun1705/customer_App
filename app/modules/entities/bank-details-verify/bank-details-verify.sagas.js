import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import BankDetailsVerifyActions from './bank-details-verify.reducer'

export function* getBankDetailsVerify(api, action) {
  const { bankDetailsVerifyId } = action
  // make the call to the api
  const apiCall = call(api.getBankDetailsVerify, bankDetailsVerifyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(BankDetailsVerifyActions.bankDetailsVerifySuccess(response.data))
  } else {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyFailure(response.data))
  }
}

export function* getBankDetailsVerifies(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getBankDetailsVerifies, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyAllSuccess(response.data))
  } else {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyAllFailure(response.data))
  }
}

export function* updateBankDetailsVerify(api, action) {
  const { bankDetailsVerify } = action
  // make the call to the api
  const idIsNotNull = !!bankDetailsVerify.id
  const apiCall = call(idIsNotNull ? api.updateBankDetailsVerify : api.createBankDetailsVerify, bankDetailsVerify)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(BankDetailsVerifyActions.bankDetailsVerifyUpdateSuccess(response.data))
  } else {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyUpdateFailure(response.data))
  }
}

export function* searchBankDetailsVerifies(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchBankDetailsVerifies, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(BankDetailsVerifyActions.bankDetailsVerifySearchSuccess(response.data))
  } else {
    yield put(BankDetailsVerifyActions.bankDetailsVerifySearchFailure(response.data))
  }
}
export function* deleteBankDetailsVerify(api, action) {
  const { bankDetailsVerifyId } = action
  // make the call to the api
  const apiCall = call(api.deleteBankDetailsVerify, bankDetailsVerifyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyDeleteSuccess())
  } else {
    yield put(BankDetailsVerifyActions.bankDetailsVerifyDeleteFailure(response.data))
  }
}
function mapDateFields(data) {
  if (data.submittedOn) {
    data.submittedOn = new Date(data.submittedOn)
  }
  if (data.verifiedOn) {
    data.verifiedOn = new Date(data.verifiedOn)
  }
  return data
}
