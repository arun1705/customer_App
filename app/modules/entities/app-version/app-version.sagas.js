import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import AppVersionActions from './app-version.reducer'

export function* getAppVersion(api, action) {
  const { appVersionId } = action
  // make the call to the api
  const apiCall = call(api.getAppVersion, appVersionId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AppVersionActions.appVersionSuccess(response.data))
  } else {
    yield put(AppVersionActions.appVersionFailure(response.data))
  }
}

export function* getAppVersions(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getAppVersions, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AppVersionActions.appVersionAllSuccess(response.data))
  } else {
    yield put(AppVersionActions.appVersionAllFailure(response.data))
  }
}

export function* updateAppVersion(api, action) {
  const { appVersion } = action
  // make the call to the api
  const idIsNotNull = !!appVersion.id
  const apiCall = call(idIsNotNull ? api.updateAppVersion : api.createAppVersion, appVersion)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AppVersionActions.appVersionUpdateSuccess(response.data))
  } else {
    yield put(AppVersionActions.appVersionUpdateFailure(response.data))
  }
}

export function* searchAppVersions(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchAppVersions, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AppVersionActions.appVersionSearchSuccess(response.data))
  } else {
    yield put(AppVersionActions.appVersionSearchFailure(response.data))
  }
}
export function* deleteAppVersion(api, action) {
  const { appVersionId } = action
  // make the call to the api
  const apiCall = call(api.deleteAppVersion, appVersionId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AppVersionActions.appVersionDeleteSuccess())
  } else {
    yield put(AppVersionActions.appVersionDeleteFailure(response.data))
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
