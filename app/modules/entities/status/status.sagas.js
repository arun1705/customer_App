import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import StatusActions from './status.reducer'

export function* getStatus(api, action) {
  const { statusId } = action
  // make the call to the api
  const apiCall = call(api.getStatus, statusId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StatusActions.statusSuccess(response.data))
  } else {
    yield put(StatusActions.statusFailure(response.data))
  }
}

export function* getStatuses(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getStatuses, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusActions.statusAllSuccess(response.data))
  } else {
    yield put(StatusActions.statusAllFailure(response.data))
  }
}

export function* updateStatus(api, action) {
  const { status } = action
  // make the call to the api
  const idIsNotNull = !!status.id
  const apiCall = call(idIsNotNull ? api.updateStatus : api.createStatus, status)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StatusActions.statusUpdateSuccess(response.data))
  } else {
    yield put(StatusActions.statusUpdateFailure(response.data))
  }
}

export function* searchStatuses(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchStatuses, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusActions.statusSearchSuccess(response.data))
  } else {
    yield put(StatusActions.statusSearchFailure(response.data))
  }
}
export function* deleteStatus(api, action) {
  const { statusId } = action
  // make the call to the api
  const apiCall = call(api.deleteStatus, statusId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusActions.statusDeleteSuccess())
  } else {
    yield put(StatusActions.statusDeleteFailure(response.data))
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
