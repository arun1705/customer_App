import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import DocSubTypeActions from './doc-sub-type.reducer'

export function* getDocSubType(api, action) {
  const { docSubTypeId } = action
  // make the call to the api
  const apiCall = call(api.getDocSubType, docSubTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(DocSubTypeActions.docSubTypeSuccess(response.data))
  } else {
    yield put(DocSubTypeActions.docSubTypeFailure(response.data))
  }
}

export function* getDocSubTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getDocSubTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocSubTypeActions.docSubTypeAllSuccess(response.data))
  } else {
    yield put(DocSubTypeActions.docSubTypeAllFailure(response.data))
  }
}

export function* updateDocSubType(api, action) {
  const { docSubType } = action
  // make the call to the api
  const idIsNotNull = !!docSubType.id
  const apiCall = call(idIsNotNull ? api.updateDocSubType : api.createDocSubType, docSubType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(DocSubTypeActions.docSubTypeUpdateSuccess(response.data))
  } else {
    yield put(DocSubTypeActions.docSubTypeUpdateFailure(response.data))
  }
}

export function* searchDocSubTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchDocSubTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocSubTypeActions.docSubTypeSearchSuccess(response.data))
  } else {
    yield put(DocSubTypeActions.docSubTypeSearchFailure(response.data))
  }
}
export function* deleteDocSubType(api, action) {
  const { docSubTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteDocSubType, docSubTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocSubTypeActions.docSubTypeDeleteSuccess())
  } else {
    yield put(DocSubTypeActions.docSubTypeDeleteFailure(response.data))
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
