import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getCity, getCities, updateCity, deleteCity, searchCities } from '../../../../../app/modules/entities/city/city.sagas'
import CityActions from '../../../../../app/modules/entities/city/city.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getCity(1)
  const step = stepper(getCity(FixtureAPI, { cityId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CityActions.citySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getCity(FixtureAPI, { cityId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CityActions.cityFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getCities()
  const step = stepper(getCities(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CityActions.cityAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getCities(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CityActions.cityAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateCity({ id: 1 })
  const step = stepper(updateCity(FixtureAPI, { city: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CityActions.cityUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateCity(FixtureAPI, { city: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CityActions.cityUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchCities()
  const step = stepper(searchCities(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CityActions.citySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchCities(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CityActions.citySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteCity({ id: 1 })
  const step = stepper(deleteCity(FixtureAPI, { cityId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CityActions.cityDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteCity(FixtureAPI, { cityId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CityActions.cityDeleteFailure()))
})
