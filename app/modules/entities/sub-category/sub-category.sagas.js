import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SubCategoryActions from './sub-category.reducer'

export function* getSubCategory(api, action) {
  const { subCategoryId } = action
  // make the call to the api
  const apiCall = call(api.getSubCategory, subCategoryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SubCategoryActions.subCategorySuccess(response.data))
  } else {
    yield put(SubCategoryActions.subCategoryFailure(response.data))
  }
}

export function* getSubCategories(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSubCategories, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryActions.subCategoryAllSuccess(response.data))
  } else {
    yield put(SubCategoryActions.subCategoryAllFailure(response.data))
  }
}

export function* updateSubCategory(api, action) {
  const { subCategory } = action
  // make the call to the api
  const idIsNotNull = !!subCategory.id
  const apiCall = call(idIsNotNull ? api.updateSubCategory : api.createSubCategory, subCategory)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SubCategoryActions.subCategoryUpdateSuccess(response.data))
  } else {
    yield put(SubCategoryActions.subCategoryUpdateFailure(response.data))
  }
}

export function* searchSubCategories(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSubCategories, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryActions.subCategorySearchSuccess(response.data))
  } else {
    yield put(SubCategoryActions.subCategorySearchFailure(response.data))
  }
}
export function* deleteSubCategory(api, action) {
  const { subCategoryId } = action
  // make the call to the api
  const apiCall = call(api.deleteSubCategory, subCategoryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SubCategoryActions.subCategoryDeleteSuccess())
  } else {
    yield put(SubCategoryActions.subCategoryDeleteFailure(response.data))
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
