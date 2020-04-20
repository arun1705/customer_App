import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import StatusTypeActions from './status-type.reducer'

export function* getStatusType(api, action) {
  const { statusTypeId } = action
  // make the call to the api
  const apiCall = call(api.getStatusType, statusTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StatusTypeActions.statusTypeSuccess(response.data))
  } else {
    yield put(StatusTypeActions.statusTypeFailure(response.data))
  }
}

export function* getStatusTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getStatusTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusTypeActions.statusTypeAllSuccess(response.data))
  } else {
    yield put(StatusTypeActions.statusTypeAllFailure(response.data))
  }
}

export function* updateStatusType(api, action) {
  const { statusType } = action
  // make the call to the api
  const idIsNotNull = !!statusType.id
  const apiCall = call(idIsNotNull ? api.updateStatusType : api.createStatusType, statusType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StatusTypeActions.statusTypeUpdateSuccess(response.data))
  } else {
    yield put(StatusTypeActions.statusTypeUpdateFailure(response.data))
  }
}

export function* searchStatusTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchStatusTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusTypeActions.statusTypeSearchSuccess(response.data))
  } else {
    yield put(StatusTypeActions.statusTypeSearchFailure(response.data))
  }
}
export function* deleteStatusType(api, action) {
  const { statusTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteStatusType, statusTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StatusTypeActions.statusTypeDeleteSuccess())
  } else {
    yield put(StatusTypeActions.statusTypeDeleteFailure(response.data))
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
