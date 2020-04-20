import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SbCatPointActions from './sb-cat-point.reducer'

export function* getSbCatPoint(api, action) {
  const { sbCatPointId } = action
  // make the call to the api
  const apiCall = call(api.getSbCatPoint, sbCatPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatPointActions.sbCatPointSuccess(response.data))
  } else {
    yield put(SbCatPointActions.sbCatPointFailure(response.data))
  }
}

export function* getSbCatPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSbCatPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatPointActions.sbCatPointAllSuccess(response.data))
  } else {
    yield put(SbCatPointActions.sbCatPointAllFailure(response.data))
  }
}

export function* updateSbCatPoint(api, action) {
  const { sbCatPoint } = action
  // make the call to the api
  const idIsNotNull = !!sbCatPoint.id
  const apiCall = call(idIsNotNull ? api.updateSbCatPoint : api.createSbCatPoint, sbCatPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatPointActions.sbCatPointUpdateSuccess(response.data))
  } else {
    yield put(SbCatPointActions.sbCatPointUpdateFailure(response.data))
  }
}

export function* searchSbCatPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSbCatPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatPointActions.sbCatPointSearchSuccess(response.data))
  } else {
    yield put(SbCatPointActions.sbCatPointSearchFailure(response.data))
  }
}
export function* deleteSbCatPoint(api, action) {
  const { sbCatPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteSbCatPoint, sbCatPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatPointActions.sbCatPointDeleteSuccess())
  } else {
    yield put(SbCatPointActions.sbCatPointDeleteFailure(response.data))
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
