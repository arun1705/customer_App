import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SbCatTypePointActions from './sb-cat-type-point.reducer'

export function* getSbCatTypePoint(api, action) {
  const { sbCatTypePointId } = action
  // make the call to the api
  const apiCall = call(api.getSbCatTypePoint, sbCatTypePointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatTypePointActions.sbCatTypePointSuccess(response.data))
  } else {
    yield put(SbCatTypePointActions.sbCatTypePointFailure(response.data))
  }
}

export function* getSbCatTypePoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSbCatTypePoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypePointActions.sbCatTypePointAllSuccess(response.data))
  } else {
    yield put(SbCatTypePointActions.sbCatTypePointAllFailure(response.data))
  }
}

export function* updateSbCatTypePoint(api, action) {
  const { sbCatTypePoint } = action
  // make the call to the api
  const idIsNotNull = !!sbCatTypePoint.id
  const apiCall = call(idIsNotNull ? api.updateSbCatTypePoint : api.createSbCatTypePoint, sbCatTypePoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatTypePointActions.sbCatTypePointUpdateSuccess(response.data))
  } else {
    yield put(SbCatTypePointActions.sbCatTypePointUpdateFailure(response.data))
  }
}

export function* searchSbCatTypePoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSbCatTypePoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypePointActions.sbCatTypePointSearchSuccess(response.data))
  } else {
    yield put(SbCatTypePointActions.sbCatTypePointSearchFailure(response.data))
  }
}
export function* deleteSbCatTypePoint(api, action) {
  const { sbCatTypePointId } = action
  // make the call to the api
  const apiCall = call(api.deleteSbCatTypePoint, sbCatTypePointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatTypePointActions.sbCatTypePointDeleteSuccess())
  } else {
    yield put(SbCatTypePointActions.sbCatTypePointDeleteFailure(response.data))
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
