import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import UserDocActions from './user-doc.reducer'

export function* getUserDoc(api, action) {
  const { userDocId } = action
  // make the call to the api
  const apiCall = call(api.getUserDoc, userDocId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(UserDocActions.userDocSuccess(response.data))
  } else {
    yield put(UserDocActions.userDocFailure(response.data))
  }
}

export function* getUserDocs(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getUserDocs, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserDocActions.userDocAllSuccess(response.data))
  } else {
    yield put(UserDocActions.userDocAllFailure(response.data))
  }
}

export function* updateUserDoc(api, action) {
  const { userDoc } = action
  // make the call to the api
  const idIsNotNull = !!userDoc.id
  const apiCall = call(idIsNotNull ? api.updateUserDoc : api.createUserDoc, userDoc)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(UserDocActions.userDocUpdateSuccess(response.data))
  } else {
    yield put(UserDocActions.userDocUpdateFailure(response.data))
  }
}

export function* searchUserDocs(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchUserDocs, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserDocActions.userDocSearchSuccess(response.data))
  } else {
    yield put(UserDocActions.userDocSearchFailure(response.data))
  }
}
export function* deleteUserDoc(api, action) {
  const { userDocId } = action
  // make the call to the api
  const apiCall = call(api.deleteUserDoc, userDocId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(UserDocActions.userDocDeleteSuccess())
  } else {
    yield put(UserDocActions.userDocDeleteFailure(response.data))
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
