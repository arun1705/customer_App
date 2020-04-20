import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSbCatTypePoint,
  getSbCatTypePoints,
  updateSbCatTypePoint,
  deleteSbCatTypePoint,
  searchSbCatTypePoints,
} from '../../../../../app/modules/entities/sb-cat-type-point/sb-cat-type-point.sagas'
import SbCatTypePointActions from '../../../../../app/modules/entities/sb-cat-type-point/sb-cat-type-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSbCatTypePoint(1)
  const step = stepper(getSbCatTypePoint(FixtureAPI, { sbCatTypePointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatTypePoint(FixtureAPI, { sbCatTypePointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSbCatTypePoints()
  const step = stepper(getSbCatTypePoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSbCatTypePoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSbCatTypePoint({ id: 1 })
  const step = stepper(updateSbCatTypePoint(FixtureAPI, { sbCatTypePoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSbCatTypePoint(FixtureAPI, { sbCatTypePoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSbCatTypePoints()
  const step = stepper(searchSbCatTypePoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSbCatTypePoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSbCatTypePoint({ id: 1 })
  const step = stepper(deleteSbCatTypePoint(FixtureAPI, { sbCatTypePointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSbCatTypePoint(FixtureAPI, { sbCatTypePointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SbCatTypePointActions.sbCatTypePointDeleteFailure()))
})
