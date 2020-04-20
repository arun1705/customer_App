import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CategoryActions from './category.reducer'

export function* getCategory(api, action) {
  const { categoryId } = action
  // make the call to the api
  const apiCall = call(api.getCategory, categoryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CategoryActions.categorySuccess(response.data))
  } else {
    yield put(CategoryActions.categoryFailure(response.data))
  }
}

export function* getCategories(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCategories, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CategoryActions.categoryAllSuccess(response.data))
  } else {
    yield put(CategoryActions.categoryAllFailure(response.data))
  }
}

export function* updateCategory(api, action) {
  const { category } = action
  // make the call to the api
  const idIsNotNull = !!category.id
  const apiCall = call(idIsNotNull ? api.updateCategory : api.createCategory, category)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CategoryActions.categoryUpdateSuccess(response.data))
  } else {
    yield put(CategoryActions.categoryUpdateFailure(response.data))
  }
}

export function* searchCategories(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCategories, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CategoryActions.categorySearchSuccess(response.data))
  } else {
    yield put(CategoryActions.categorySearchFailure(response.data))
  }
}
export function* deleteCategory(api, action) {
  const { categoryId } = action
  // make the call to the api
  const apiCall = call(api.deleteCategory, categoryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CategoryActions.categoryDeleteSuccess())
  } else {
    yield put(CategoryActions.categoryDeleteFailure(response.data))
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
