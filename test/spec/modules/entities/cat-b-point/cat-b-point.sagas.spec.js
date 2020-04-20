import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getCatBPoint,
  getCatBPoints,
  updateCatBPoint,
  deleteCatBPoint,
  searchCatBPoints,
} from '../../../../../app/modules/entities/cat-b-point/cat-b-point.sagas'
import CatBPointActions from '../../../../../app/modules/entities/cat-b-point/cat-b-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getCatBPoint(1)
  const step = stepper(getCatBPoint(FixtureAPI, { catBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CatBPointActions.catBPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getCatBPoint(FixtureAPI, { catBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CatBPointActions.catBPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getCatBPoints()
  const step = stepper(getCatBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CatBPointActions.catBPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getCatBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CatBPointActions.catBPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateCatBPoint({ id: 1 })
  const step = stepper(updateCatBPoint(FixtureAPI, { catBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CatBPointActions.catBPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateCatBPoint(FixtureAPI, { catBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CatBPointActions.catBPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchCatBPoints()
  const step = stepper(searchCatBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CatBPointActions.catBPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchCatBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CatBPointActions.catBPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteCatBPoint({ id: 1 })
  const step = stepper(deleteCatBPoint(FixtureAPI, { catBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(CatBPointActions.catBPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteCatBPoint(FixtureAPI, { catBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(CatBPointActions.catBPointDeleteFailure()))
})
