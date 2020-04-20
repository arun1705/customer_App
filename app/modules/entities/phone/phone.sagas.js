import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import PhoneActions from './phone.reducer'

export function* getPhone(api, action) {
  const { phoneId } = action
  // make the call to the api
  const apiCall = call(api.getPhone, phoneId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PhoneActions.phoneSuccess(response.data))
  } else {
    yield put(PhoneActions.phoneFailure(response.data))
  }
}

export function* getPhones(api, action) {
  const { userId } = action
  // make the call to the api
  const apiCall = call(api.getPhones, userId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneActions.phoneAllSuccess(response.data))
  } else {
    yield put(PhoneActions.phoneAllFailure(response.data))
  }
}

export function* updatePhone(api, action) {
  const { phone } = action
  // make the call to the api
  const idIsNotNull = !!phone.id
  const apiCall = call(idIsNotNull ? api.updatePhone : api.createPhone, phone)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(PhoneActions.phoneUpdateSuccess(response.data))
  } else {
    yield put(PhoneActions.phoneUpdateFailure(response.data))
  }
}

export function* searchPhones(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchPhones, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneActions.phoneSearchSuccess(response.data))
  } else {
    yield put(PhoneActions.phoneSearchFailure(response.data))
  }
}
export function* deletePhone(api, action) {
  const { phoneId } = action
  // make the call to the api
  const apiCall = call(api.deletePhone, phoneId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(PhoneActions.phoneDeleteSuccess())
  } else {
    yield put(PhoneActions.phoneDeleteFailure(response.data))
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
