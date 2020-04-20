import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CurrencyActions from './currency.reducer'

export function* getCurrency(api, action) {
  const { currencyId } = action
  // make the call to the api
  const apiCall = call(api.getCurrency, currencyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyActions.currencySuccess(response.data))
  } else {
    yield put(CurrencyActions.currencyFailure(response.data))
  }
}

export function* getCurrencies(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCurrencies, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyActions.currencyAllSuccess(response.data))
  } else {
    yield put(CurrencyActions.currencyAllFailure(response.data))
  }
}

export function* updateCurrency(api, action) {
  const { currency } = action
  // make the call to the api
  const idIsNotNull = !!currency.id
  const apiCall = call(idIsNotNull ? api.updateCurrency : api.createCurrency, currency)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyActions.currencyUpdateSuccess(response.data))
  } else {
    yield put(CurrencyActions.currencyUpdateFailure(response.data))
  }
}

export function* searchCurrencies(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCurrencies, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyActions.currencySearchSuccess(response.data))
  } else {
    yield put(CurrencyActions.currencySearchFailure(response.data))
  }
}
export function* deleteCurrency(api, action) {
  const { currencyId } = action
  // make the call to the api
  const apiCall = call(api.deleteCurrency, currencyId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyActions.currencyDeleteSuccess())
  } else {
    yield put(CurrencyActions.currencyDeleteFailure(response.data))
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
