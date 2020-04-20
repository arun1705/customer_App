import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getCurrency,
  getCurrencies,
  updateCurrency,
  deleteCurrency,
  searchCurrencies,
} from '../../../../../app/modules/entities/currency/currency.sagas'
import CurrencyActions from '../../../../../app/modules/entities/currency/currency.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getCurrency(1)
  const step = stepper(getCurrency(FixtureAPI, { currencyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyActions.currencySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrency(FixtureAPI, { currencyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyActions.currencyFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getCurrencies()
  const step = stepper(getCurrencies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyActions.currencyAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getCurrencies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyActions.currencyAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateCurrency({ id: 1 })
  const step = stepper(updateCurrency(FixtureAPI, { currency: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyActions.currencyUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateCurrency(FixtureAPI, { currency: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyActions.currencyUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchCurrencies()
  const step = stepper(searchCurrencies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyActions.currencySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchCurrencies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyActions.currencySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteCurrency({ id: 1 })
  const step = stepper(deleteCurrency(FixtureAPI, { currencyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CurrencyActions.currencyDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteCurrency(FixtureAPI, { currencyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CurrencyActions.currencyDeleteFailure()))
})
