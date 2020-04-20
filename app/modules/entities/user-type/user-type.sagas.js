import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import UserTypeActions from './user-type.reducer'

export function* getUserType(api, action) {
  const { userTypeId } = action
  // make the call to the api
  const apiCall = call(api.getUserType, userTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserTypeActions.userTypeSuccess(response.data))
  } else {
    yield put(UserTypeActions.userTypeFailure(response.data))
  }
}

export function* getUserTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getUserTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserTypeActions.userTypeAllSuccess(response.data))
  } else {
    yield put(UserTypeActions.userTypeAllFailure(response.data))
  }
}

export function* updateUserType(api, action) {
  const { userType } = action
  // make the call to the api
  const idIsNotNull = !!userType.id
  const apiCall = call(idIsNotNull ? api.updateUserType : api.createUserType, userType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserTypeActions.userTypeUpdateSuccess(response.data))
  } else {
    yield put(UserTypeActions.userTypeUpdateFailure(response.data))
  }
}

export function* searchUserTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchUserTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserTypeActions.userTypeSearchSuccess(response.data))
  } else {
    yield put(UserTypeActions.userTypeSearchFailure(response.data))
  }
}
export function* deleteUserType(api, action) {
  const { userTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteUserType, userTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserTypeActions.userTypeDeleteSuccess())
  } else {
    yield put(UserTypeActions.userTypeDeleteFailure(response.data))
  }
}
