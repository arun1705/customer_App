import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import SbCatBPointActions from './sb-cat-b-point.reducer'

export function* getSbCatBPoint(api, action) {
  const { sbCatBPointId } = action
  // make the call to the api
  const apiCall = call(api.getSbCatBPoint, sbCatBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatBPointActions.sbCatBPointSuccess(response.data))
  } else {
    yield put(SbCatBPointActions.sbCatBPointFailure(response.data))
  }
}

export function* getSbCatBPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getSbCatBPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatBPointActions.sbCatBPointAllSuccess(response.data))
  } else {
    yield put(SbCatBPointActions.sbCatBPointAllFailure(response.data))
  }
}

export function* updateSbCatBPoint(api, action) {
  const { sbCatBPoint } = action
  // make the call to the api
  const idIsNotNull = !!sbCatBPoint.id
  const apiCall = call(idIsNotNull ? api.updateSbCatBPoint : api.createSbCatBPoint, sbCatBPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(SbCatBPointActions.sbCatBPointUpdateSuccess(response.data))
  } else {
    yield put(SbCatBPointActions.sbCatBPointUpdateFailure(response.data))
  }
}

export function* searchSbCatBPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchSbCatBPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatBPointActions.sbCatBPointSearchSuccess(response.data))
  } else {
    yield put(SbCatBPointActions.sbCatBPointSearchFailure(response.data))
  }
}
export function* deleteSbCatBPoint(api, action) {
  const { sbCatBPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteSbCatBPoint, sbCatBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(SbCatBPointActions.sbCatBPointDeleteSuccess())
  } else {
    yield put(SbCatBPointActions.sbCatBPointDeleteFailure(response.data))
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
