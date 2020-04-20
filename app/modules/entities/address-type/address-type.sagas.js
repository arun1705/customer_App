import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import AddressTypeActions from './address-type.reducer'

export function* getAddressType(api, action) {
  const { addressTypeId } = action
  // make the call to the api
  const apiCall = call(api.getAddressType, addressTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressTypeActions.addressTypeSuccess(response.data))
  } else {
    yield put(AddressTypeActions.addressTypeFailure(response.data))
  }
}

export function* getAddressTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getAddressTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressTypeActions.addressTypeAllSuccess(response.data))
  } else {
    yield put(AddressTypeActions.addressTypeAllFailure(response.data))
  }
}

export function* updateAddressType(api, action) {
  const { addressType } = action
  // make the call to the api
  const idIsNotNull = !!addressType.id
  const apiCall = call(idIsNotNull ? api.updateAddressType : api.createAddressType, addressType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressTypeActions.addressTypeUpdateSuccess(response.data))
  } else {
    yield put(AddressTypeActions.addressTypeUpdateFailure(response.data))
  }
}

export function* searchAddressTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchAddressTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressTypeActions.addressTypeSearchSuccess(response.data))
  } else {
    yield put(AddressTypeActions.addressTypeSearchFailure(response.data))
  }
}
export function* deleteAddressType(api, action) {
  const { addressTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteAddressType, addressTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AddressTypeActions.addressTypeDeleteSuccess())
  } else {
    yield put(AddressTypeActions.addressTypeDeleteFailure(response.data))
  }
}
