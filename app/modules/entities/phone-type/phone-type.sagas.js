import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import PhoneTypeActions from './phone-type.reducer'

export function* getPhoneType(api, action) {
  const { phoneTypeId } = action
  // make the call to the api
  const apiCall = call(api.getPhoneType, phoneTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneTypeActions.phoneTypeSuccess(response.data))
  } else {
    yield put(PhoneTypeActions.phoneTypeFailure(response.data))
  }
}

export function* getPhoneTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getPhoneTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneTypeActions.phoneTypeAllSuccess(response.data))
  } else {
    yield put(PhoneTypeActions.phoneTypeAllFailure(response.data))
  }
}

export function* updatePhoneType(api, action) {
  const { phoneType } = action
  // make the call to the api
  const idIsNotNull = !!phoneType.id
  const apiCall = call(idIsNotNull ? api.updatePhoneType : api.createPhoneType, phoneType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneTypeActions.phoneTypeUpdateSuccess(response.data))
  } else {
    yield put(PhoneTypeActions.phoneTypeUpdateFailure(response.data))
  }
}

export function* searchPhoneTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchPhoneTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneTypeActions.phoneTypeSearchSuccess(response.data))
  } else {
    yield put(PhoneTypeActions.phoneTypeSearchFailure(response.data))
  }
}
export function* deletePhoneType(api, action) {
  const { phoneTypeId } = action
  // make the call to the api
  const apiCall = call(api.deletePhoneType, phoneTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneTypeActions.phoneTypeDeleteSuccess())
  } else {
    yield put(PhoneTypeActions.phoneTypeDeleteFailure(response.data))
  }
}
