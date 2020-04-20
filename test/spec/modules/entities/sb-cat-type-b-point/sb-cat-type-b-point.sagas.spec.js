import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSbCatTypeBPoint,
  getSbCatTypeBPoints,
  updateSbCatTypeBPoint,
  deleteSbCatTypeBPoint,
  searchSbCatTypeBPoints,
} from '../../../../../app/modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.sagas'
import SbCatTypeBPointActions from '../../../../../app/modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSbCatTypeBPoint(1)
  const step = stepper(getSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSbCatTypeBPoints()
  const step = stepper(getSbCatTypeBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatTypeBPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSbCatTypeBPoint({ id: 1 })
  const step = stepper(updateSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSbCatTypeBPoints()
  const step = stepper(searchSbCatTypeBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSbCatTypeBPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSbCatTypeBPoint({ id: 1 })
  const step = stepper(deleteSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSbCatTypeBPoint(FixtureAPI, { sbCatTypeBPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypeBPointActions.sbCatTypeBPointDeleteFailure()))
})
