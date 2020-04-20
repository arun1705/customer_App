import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getCurrencyBPoint,
  getCurrencyBPoints,
  updateCurrencyBPoint,
  deleteCurrencyBPoint,
  searchCurrencyBPoints,
} from '../../../../../app/modules/entities/currency-b-point/currency-b-point.sagas'
import CurrencyBPointActions from '../../../../../app/modules/entities/currency-b-point/currency-b-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getCurrencyBPoint(1)
  const step = stepper(getCurrencyBPoint(FixtureAPI, { currencyBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrencyBPoint(FixtureAPI, { currencyBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getCurrencyBPoints()
  const step = stepper(getCurrencyBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrencyBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateCurrencyBPoint({ id: 1 })
  const step = stepper(updateCurrencyBPoint(FixtureAPI, { currencyBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateCurrencyBPoint(FixtureAPI, { currencyBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchCurrencyBPoints()
  const step = stepper(searchCurrencyBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchCurrencyBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteCurrencyBPoint({ id: 1 })
  const step = stepper(deleteCurrencyBPoint(FixtureAPI, { currencyBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteCurrencyBPoint(FixtureAPI, { currencyBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyBPointActions.currencyBPointDeleteFailure()))
})
