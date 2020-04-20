import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SubCategoryTypeActions from './sub-category-type.reducer'

export function* getSubCategoryType(api, action) {
  const { subCategoryTypeId } = action
  // make the call to the api
  const apiCall = call(api.getSubCategoryType, subCategoryTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SubCategoryTypeActions.subCategoryTypeSuccess(response.data))
  } else {
    yield put(SubCategoryTypeActions.subCategoryTypeFailure(response.data))
  }
}

export function* getSubCategoryTypes(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSubCategoryTypes, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryTypeActions.subCategoryTypeAllSuccess(response.data))
  } else {
    yield put(SubCategoryTypeActions.subCategoryTypeAllFailure(response.data))
  }
}

export function* updateSubCategoryType(api, action) {
  const { subCategoryType } = action
  // make the call to the api
  const idIsNotNull = !!subCategoryType.id
  const apiCall = call(idIsNotNull ? api.updateSubCategoryType : api.createSubCategoryType, subCategoryType)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SubCategoryTypeActions.subCategoryTypeUpdateSuccess(response.data))
  } else {
    yield put(SubCategoryTypeActions.subCategoryTypeUpdateFailure(response.data))
  }
}

export function* searchSubCategoryTypes(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSubCategoryTypes, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryTypeActions.subCategoryTypeSearchSuccess(response.data))
  } else {
    yield put(SubCategoryTypeActions.subCategoryTypeSearchFailure(response.data))
  }
}
export function* deleteSubCategoryType(api, action) {
  const { subCategoryTypeId } = action
  // make the call to the api
  const apiCall = call(api.deleteSubCategoryType, subCategoryTypeId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryTypeActions.subCategoryTypeDeleteSuccess())
  } else {
    yield put(SubCategoryTypeActions.subCategoryTypeDeleteFailure(response.data))
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
