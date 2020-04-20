import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CatBPointActions from './cat-b-point.reducer'

export function* getCatBPoint(api, action) {
  const { catBPointId } = action
  // make the call to the api
  const apiCall = call(api.getCatBPoint, catBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CatBPointActions.catBPointSuccess(response.data))
  } else {
    yield put(CatBPointActions.catBPointFailure(response.data))
  }
}

export function* getCatBPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCatBPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CatBPointActions.catBPointAllSuccess(response.data))
  } else {
    yield put(CatBPointActions.catBPointAllFailure(response.data))
  }
}

export function* updateCatBPoint(api, action) {
  const { catBPoint } = action
  // make the call to the api
  const idIsNotNull = !!catBPoint.id
  const apiCall = call(idIsNotNull ? api.updateCatBPoint : api.createCatBPoint, catBPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CatBPointActions.catBPointUpdateSuccess(response.data))
  } else {
    yield put(CatBPointActions.catBPointUpdateFailure(response.data))
  }
}

export function* searchCatBPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCatBPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CatBPointActions.catBPointSearchSuccess(response.data))
  } else {
    yield put(CatBPointActions.catBPointSearchFailure(response.data))
  }
}
export function* deleteCatBPoint(api, action) {
  const { catBPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteCatBPoint, catBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CatBPointActions.catBPointDeleteSuccess())
  } else {
    yield put(CatBPointActions.catBPointDeleteFailure(response.data))
  }
}
function mapDateFields(data) {
  if (data.startDate) {
    data.startDate = new Date(data.startDate)
  }
  if (data.endDate) {
    data.endDate = new Date(data.endDate)
  }
  if (data.createdOn) {
    data.createdOn = new Date(data.createdOn)
  }
  if (data.modifiedOn) {
    data.modifiedOn = new Date(data.modifiedOn)
  }
  return data
}
