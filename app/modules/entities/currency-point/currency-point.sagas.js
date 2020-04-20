import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import CurrencyPointActions from './currency-point.reducer'

export function* getCurrencyPoint(api, action) {
  const { currencyPointId } = action
  // make the call to the api
  const apiCall = call(api.getCurrencyPoint, currencyPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyPointActions.currencyPointSuccess(response.data))
  } else {
    yield put(CurrencyPointActions.currencyPointFailure(response.data))
  }
}

export function* getCurrencyPoints(api, action) {
  const { options } = action
  // make the call to the api
  const apiCall = call(api.getCurrencyPoints, options)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyPointActions.currencyPointAllSuccess(response.data))
  } else {
    yield put(CurrencyPointActions.currencyPointAllFailure(response.data))
  }
}

export function* updateCurrencyPoint(api, action) {
  const { currencyPoint } = action
  // make the call to the api
  const idIsNotNull = !!currencyPoint.id
  const apiCall = call(idIsNotNull ? api.updateCurrencyPoint : api.createCurrencyPoint, currencyPoint)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    response.data = mapDateFields(response.data)
    yield put(CurrencyPointActions.currencyPointUpdateSuccess(response.data))
  } else {
    yield put(CurrencyPointActions.currencyPointUpdateFailure(response.data))
  }
}

export function* searchCurrencyPoints(api, action) {
  const { query } = action
  // make the call to the api
  const apiCall = call(api.searchCurrencyPoints, query)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyPointActions.currencyPointSearchSuccess(response.data))
  } else {
    yield put(CurrencyPointActions.currencyPointSearchFailure(response.data))
  }
}
export function* deleteCurrencyPoint(api, action) {
  const { currencyPointId } = action
  // make the call to the api
  const apiCall = call(api.deleteCurrencyPoint, currencyPointId)
  const response = yield call(callApi, apiCall)

  // success?
  if (response.ok) {
    yield put(CurrencyPointActions.currencyPointDeleteSuccess())
  } else {
    yield put(CurrencyPointActions.currencyPointDeleteFailure(response.data))
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
