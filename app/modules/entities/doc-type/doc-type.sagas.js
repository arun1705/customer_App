import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import DocTypeActions from './doc-type.reducer'

export function* getDocType(api, action) {
  const { docTypeId } = action
  // make the call to the api
  const apiCall = call(api.getDocType, docTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(DocTypeActions.docTypeSuccess(response.data))
  } else {
    yield put(DocTypeActions.docTypeFailure(response.data))
  }
}

export function* getDocTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getDocTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocTypeActions.docTypeAllSuccess(response.data))
  } else {
    yield put(DocTypeActions.docTypeAllFailure(response.data))
  }
}

export function* updateDocType(api, action) {
  const { docType } = action
  // make the call to the api
  const idIsNotNull = !!docType.id
  const apiCall = call(idIsNotNull ? api.updateDocType : api.createDocType, docType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(DocTypeActions.docTypeUpdateSuccess(response.data))
  } else {
    yield put(DocTypeActions.docTypeUpdateFailure(response.data))
  }
}

export function* searchDocTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchDocTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocTypeActions.docTypeSearchSuccess(response.data))
  } else {
    yield put(DocTypeActions.docTypeSearchFailure(response.data))
  }
}
export function* deleteDocType(api, action) {
  const { docTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteDocType, docTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(DocTypeActions.docTypeDeleteSuccess())
  } else {
    yield put(DocTypeActions.docTypeDeleteFailure(response.data))
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
