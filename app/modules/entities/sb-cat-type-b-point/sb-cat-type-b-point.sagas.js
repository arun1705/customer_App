import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SbCatTypeBPointActions from './sb-cat-type-b-point.reducer'

export function* getSbCatTypeBPoint(api, action) {
  const { sbCatTypeBPointId } = action
  // make the call to the api
  const apiCall = call(api.getSbCatTypeBPoint, sbCatTypeBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatTypeBPointActions.sbCatTypeBPointSuccess(response.data))
  } else {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointFailure(response.data))
  }
}

export function* getSbCatTypeBPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSbCatTypeBPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointAllSuccess(response.data))
  } else {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointAllFailure(response.data))
  }
}

export function* updateSbCatTypeBPoint(api, action) {
  const { sbCatTypeBPoint } = action
  // make the call to the api
  const idIsNotNull = !!sbCatTypeBPoint.id
  const apiCall = call(idIsNotNull ? api.updateSbCatTypeBPoint : api.createSbCatTypeBPoint, sbCatTypeBPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatTypeBPointActions.sbCatTypeBPointUpdateSuccess(response.data))
  } else {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointUpdateFailure(response.data))
  }
}

export function* searchSbCatTypeBPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSbCatTypeBPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointSearchSuccess(response.data))
  } else {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointSearchFailure(response.data))
  }
}
export function* deleteSbCatTypeBPoint(api, action) {
  const { sbCatTypeBPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteSbCatTypeBPoint, sbCatTypeBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointDeleteSuccess())
  } else {
    yield put(SbCatTypeBPointActions.sbCatTypeBPointDeleteFailure(response.data))
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
