import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CityActions from './city.reducer'

export function* getCity(api, action) {
  const { cityId } = action
  // make the call to the api
  const apiCall = call(api.getCity, cityId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CityActions.citySuccess(response.data))
  } else {
    yield put(CityActions.cityFailure(response.data))
  }
}

export function* getCities(api, action) {
  const { id } = action
  // make the call to the api
  const apiCall = call(api.getCities, id)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CityActions.cityAllSuccess(response.data))
  } else {
    yield put(CityActions.cityAllFailure(response.data))
  }
}

export function* updateCity(api, action) {
  const { city } = action
  // make the call to the api
  const idIsNotNull = !!city.id
  const apiCall = call(idIsNotNull ? api.updateCity : api.createCity, city)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CityActions.cityUpdateSuccess(response.data))
  } else {
    yield put(CityActions.cityUpdateFailure(response.data))
  }
}

export function* searchCities(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCities, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CityActions.citySearchSuccess(response.data))
  } else {
    yield put(CityActions.citySearchFailure(response.data))
  }
}
export function* deleteCity(api, action) {
  const { cityId } = action
  // make the call to the api
  const apiCall = call(api.deleteCity, cityId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CityActions.cityDeleteSuccess())
  } else {
    yield put(CityActions.cityDeleteFailure(response.data))
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
