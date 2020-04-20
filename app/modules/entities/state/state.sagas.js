import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import StateActions from './state.reducer'

export function* getState(api, action) {
  const { stateId } = action
  // make the call to the api
  const apiCall = call(api.getState, stateId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StateActions.stateSuccess(response.data))
  } else {
    yield put(StateActions.stateFailure(response.data))
  }
}

export function* getStates(api, action) {
  const { id } = action
  // make the call to the api
  const apiCall = call(api.getStates, id)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StateActions.stateAllSuccess(response.data))
  } else {
    yield put(StateActions.stateAllFailure(response.data))
  }
}

export function* updateState(api, action) {
  const { state } = action
  // make the call to the api
  const idIsNotNull = !!state.id
  const apiCall = call(idIsNotNull ? api.updateState : api.createState, state)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(StateActions.stateUpdateSuccess(response.data))
  } else {
    yield put(StateActions.stateUpdateFailure(response.data))
  }
}

export function* searchStates(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchStates, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StateActions.stateSearchSuccess(response.data))
  } else {
    yield put(StateActions.stateSearchFailure(response.data))
  }
}
export function* deleteState(api, action) {
  const { stateId } = action
  // make the call to the api
  const apiCall = call(api.deleteState, stateId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(StateActions.stateDeleteSuccess())
  } else {
    yield put(StateActions.stateDeleteFailure(response.data))
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
