import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSbCatBPoint,
  getSbCatBPoints,
  updateSbCatBPoint,
  deleteSbCatBPoint,
  searchSbCatBPoints,
} from '../../../../../app/modules/entities/sb-cat-b-point/sb-cat-b-point.sagas'
import SbCatBPointActions from '../../../../../app/modules/entities/sb-cat-b-point/sb-cat-b-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSbCatBPoint(1)
  const step = stepper(getSbCatBPoint(FixtureAPI, { sbCatBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatBPoint(FixtureAPI, { sbCatBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSbCatBPoints()
  const step = stepper(getSbCatBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSbCatBPoint({ id: 1 })
  const step = stepper(updateSbCatBPoint(FixtureAPI, { sbCatBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSbCatBPoint(FixtureAPI, { sbCatBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSbCatBPoints()
  const step = stepper(searchSbCatBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSbCatBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSbCatBPoint({ id: 1 })
  const step = stepper(deleteSbCatBPoint(FixtureAPI, { sbCatBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSbCatBPoint(FixtureAPI, { sbCatBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatBPointActions.sbCatBPointDeleteFailure()))
})
