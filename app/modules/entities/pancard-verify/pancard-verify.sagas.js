import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import PancardVerifyActions from './pancard-verify.reducer'

export function* getPancardVerify(api, action) {
  const { pancardVerifyId } = action
  // make the call to the api
  const apiCall = call(api.getPancardVerify, pancardVerifyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PancardVerifyActions.pancardVerifySuccess(response.data))
  } else {
    yield put(PancardVerifyActions.pancardVerifyFailure(response.data))
  }
}

export function* getPancardVerifies(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getPancardVerifies, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PancardVerifyActions.pancardVerifyAllSuccess(response.data))
  } else {
    yield put(PancardVerifyActions.pancardVerifyAllFailure(response.data))
  }
}

export function* updatePancardVerify(api, action) {
  const { pancardVerify } = action
  // make the call to the api
  const idIsNotNull = !!pancardVerify.id
  const apiCall = call(idIsNotNull ? api.updatePancardVerify : api.createPancardVerify, pancardVerify)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PancardVerifyActions.pancardVerifyUpdateSuccess(response.data))
  } else {
    yield put(PancardVerifyActions.pancardVerifyUpdateFailure(response.data))
  }
}

export function* searchPancardVerifies(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchPancardVerifies, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PancardVerifyActions.pancardVerifySearchSuccess(response.data))
  } else {
    yield put(PancardVerifyActions.pancardVerifySearchFailure(response.data))
  }
}
export function* deletePancardVerify(api, action) {
  const { pancardVerifyId } = action
  // make the call to the api
  const apiCall = call(api.deletePancardVerify, pancardVerifyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PancardVerifyActions.pancardVerifyDeleteSuccess())
  } else {
    yield put(PancardVerifyActions.pancardVerifyDeleteFailure(response.data))
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
