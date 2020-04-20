import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CountryActions from './country.reducer'

export function* getCountry(api, action) {
  const { countryId } = action
  // make the call to the api
  const apiCall = call(api.getCountry, countryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CountryActions.countrySuccess(response.data))
  } else {
    yield put(CountryActions.countryFailure(response.data))
  }
}

export function* getCountries(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCountries, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CountryActions.countryAllSuccess(response.data))
  } else {
    yield put(CountryActions.countryAllFailure(response.data))
  }
}

export function* updateCountry(api, action) {
  const { country } = action
  // make the call to the api
  const idIsNotNull = !!country.id
  const apiCall = call(idIsNotNull ? api.updateCountry : api.createCountry, country)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CountryActions.countryUpdateSuccess(response.data))
  } else {
    yield put(CountryActions.countryUpdateFailure(response.data))
  }
}

export function* searchCountries(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCountries, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CountryActions.countrySearchSuccess(response.data))
  } else {
    yield put(CountryActions.countrySearchFailure(response.data))
  }
}
export function* deleteCountry(api, action) {
  const { countryId } = action
  // make the call to the api
  const apiCall = call(api.deleteCountry, countryId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CountryActions.countryDeleteSuccess())
  } else {
    yield put(CountryActions.countryDeleteFailure(response.data))
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
