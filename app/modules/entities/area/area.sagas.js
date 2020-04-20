import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import AreaActions from './area.reducer'

export function* getArea(api, action) {
  const { areaId } = action
  // make the call to the api
  const apiCall = call(api.getArea, areaId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AreaActions.areaSuccess(response.data))
  } else {
    yield put(AreaActions.areaFailure(response.data))
  }
}

export function* getAreas(api, action) {
  const { id } = action
  // make the call to the api
  const apiCall = call(api.getAreas, id)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AreaActions.areaAllSuccess(response.data))
  } else {
    yield put(AreaActions.areaAllFailure(response.data))
  }
}

export function* updateArea(api, action) {
  const { area } = action
  // make the call to the api
  const idIsNotNull = !!area.id
  const apiCall = call(idIsNotNull ? api.updateArea : api.createArea, area)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(AreaActions.areaUpdateSuccess(response.data))
  } else {
    yield put(AreaActions.areaUpdateFailure(response.data))
  }
}

export function* searchAreas(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchAreas, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AreaActions.areaSearchSuccess(response.data))
  } else {
    yield put(AreaActions.areaSearchFailure(response.data))
  }
}
export function* deleteArea(api, action) {
  const { areaId } = action
  // make the call to the api
  const apiCall = call(api.deleteArea, areaId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(AreaActions.areaDeleteSuccess())
  } else {
    yield put(AreaActions.areaDeleteFailure(response.data))
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
