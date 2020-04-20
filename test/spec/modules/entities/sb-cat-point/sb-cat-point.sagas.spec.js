import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSbCatPoint,
  getSbCatPoints,
  updateSbCatPoint,
  deleteSbCatPoint,
  searchSbCatPoints,
} from '../../../../../app/modules/entities/sb-cat-point/sb-cat-point.sagas'
import SbCatPointActions from '../../../../../app/modules/entities/sb-cat-point/sb-cat-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSbCatPoint(1)
  const step = stepper(getSbCatPoint(FixtureAPI, { sbCatPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatPoint(FixtureAPI, { sbCatPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSbCatPoints()
  const step = stepper(getSbCatPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSbCatPoint({ id: 1 })
  const step = stepper(updateSbCatPoint(FixtureAPI, { sbCatPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSbCatPoint(FixtureAPI, { sbCatPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSbCatPoints()
  const step = stepper(searchSbCatPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSbCatPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSbCatPoint({ id: 1 })
  const step = stepper(deleteSbCatPoint(FixtureAPI, { sbCatPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSbCatPoint(FixtureAPI, { sbCatPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatPointActions.sbCatPointDeleteFailure()))
})
