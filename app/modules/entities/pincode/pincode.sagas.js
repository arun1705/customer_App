import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import PincodeActions from './pincode.reducer'

export function* getPincode(api, action) {
  const { pincodeId } = action
  // make the call to the api
  const apiCall = call(api.getPincode, pincodeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PincodeActions.pincodeSuccess(response.data))
  } else {
    yield put(PincodeActions.pincodeFailure(response.data))
  }
}

export function* getPincodes(api, action) {
  const { id } = action
  console.log('----------s--', action)
  // make the call to the api
  const apiCall = call(api.getPincodes, id)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PincodeActions.pincodeAllSuccess(response.data))
  } else {
    yield put(PincodeActions.pincodeAllFailure(response.data))
  }
}

export function* updatePincode(api, action) {
  const { pincode } = action
  // make the call to the api
  const idIsNotNull = !!pincode.id
  const apiCall = call(idIsNotNull ? api.updatePincode : api.createPincode, pincode)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PincodeActions.pincodeUpdateSuccess(response.data))
  } else {
    yield put(PincodeActions.pincodeUpdateFailure(response.data))
  }
}

export function* searchPincodes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchPincodes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PincodeActions.pincodeSearchSuccess(response.data))
  } else {
    yield put(PincodeActions.pincodeSearchFailure(response.data))
  }
}
export function* deletePincode(api, action) {
  const { pincodeId } = action
  // make the call to the api
  const apiCall = call(api.deletePincode, pincodeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PincodeActions.pincodeDeleteSuccess())
  } else {
    yield put(PincodeActions.pincodeDeleteFailure(response.data))
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
