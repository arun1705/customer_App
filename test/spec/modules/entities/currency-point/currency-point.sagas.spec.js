import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getCurrencyPoint,
  getCurrencyPoints,
  updateCurrencyPoint,
  deleteCurrencyPoint,
  searchCurrencyPoints,
} from '../../../../../app/modules/entities/currency-point/currency-point.sagas'
import CurrencyPointActions from '../../../../../app/modules/entities/currency-point/currency-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getCurrencyPoint(1)
  const step = stepper(getCurrencyPoint(FixtureAPI, { currencyPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrencyPoint(FixtureAPI, { currencyPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getCurrencyPoints()
  const step = stepper(getCurrencyPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrencyPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateCurrencyPoint({ id: 1 })
  const step = stepper(updateCurrencyPoint(FixtureAPI, { currencyPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateCurrencyPoint(FixtureAPI, { currencyPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchCurrencyPoints()
  const step = stepper(searchCurrencyPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchCurrencyPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteCurrencyPoint({ id: 1 })
  const step = stepper(deleteCurrencyPoint(FixtureAPI, { currencyPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteCurrencyPoint(FixtureAPI, { currencyPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyPointActions.currencyPointDeleteFailure()))
})
