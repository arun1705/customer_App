import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CurrencyBPointActions from './currency-b-point.reducer'

export function* getCurrencyBPoint(api, action) {
  const { currencyBPointId } = action
  // make the call to the api
  const apiCall = call(api.getCurrencyBPoint, currencyBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyBPointActions.currencyBPointSuccess(response.data))
  } else {
    yield put(CurrencyBPointActions.currencyBPointFailure(response.data))
  }
}

export function* getCurrencyBPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCurrencyBPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyBPointActions.currencyBPointAllSuccess(response.data))
  } else {
    yield put(CurrencyBPointActions.currencyBPointAllFailure(response.data))
  }
}

export function* updateCurrencyBPoint(api, action) {
  const { currencyBPoint } = action
  // make the call to the api
  const idIsNotNull = !!currencyBPoint.id
  const apiCall = call(idIsNotNull ? api.updateCurrencyBPoint : api.createCurrencyBPoint, currencyBPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyBPointActions.currencyBPointUpdateSuccess(response.data))
  } else {
    yield put(CurrencyBPointActions.currencyBPointUpdateFailure(response.data))
  }
}

export function* searchCurrencyBPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCurrencyBPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyBPointActions.currencyBPointSearchSuccess(response.data))
  } else {
    yield put(CurrencyBPointActions.currencyBPointSearchFailure(response.data))
  }
}
export function* deleteCurrencyBPoint(api, action) {
  const { currencyBPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteCurrencyBPoint, currencyBPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyBPointActions.currencyBPointDeleteSuccess())
  } else {
    yield put(CurrencyBPointActions.currencyBPointDeleteFailure(response.data))
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
