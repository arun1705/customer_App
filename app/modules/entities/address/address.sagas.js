import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import AddressActions from './address.reducer'

export function* getAddress(api, action) {
  const { addressId } = action
  // make the call to the api
  const apiCall = call(api.getAddress, addressId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AddressActions.addressSuccess(response.data))
  } else {
    yield put(AddressActions.addressFailure(response.data))
  }
}

export function* getAddresses(api, action) {
  const { userId } = action
  // make the call to the api
  const apiCall = call(api.getAddresses, userId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressActions.addressAllSuccess(response.data))
  } else {
    yield put(AddressActions.addressAllFailure(response.data))
  }
}

export function* updateAddress(api, action) {
  const { address } = action
  // make the call to the api
  const idIsNotNull = !!address.id
  const apiCall = call(idIsNotNull ? api.updateAddress : api.createAddress, address)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AddressActions.addressUpdateSuccess(response.data))
  } else {
    yield put(AddressActions.addressUpdateFailure(response.data))
  }
}

export function* searchAddresses(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchAddresses, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressActions.addressSearchSuccess(response.data))
  } else {
    yield put(AddressActions.addressSearchFailure(response.data))
  }
}
export function* deleteAddress(api, action) {
  const { addressId } = action
  // make the call to the api
  const apiCall = call(api.deleteAddress, addressId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressActions.addressDeleteSuccess())
  } else {
    yield put(AddressActions.addressDeleteFailure(response.data))
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
