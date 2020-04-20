import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getArea, getAreas, updateArea, deleteArea, searchAreas } from '../../../../../app/modules/entities/area/area.sagas'
import AreaActions from '../../../../../app/modules/entities/area/area.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getArea(1)
  const step = stepper(getArea(FixtureAPI, { areaId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AreaActions.areaSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getArea(FixtureAPI, { areaId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AreaActions.areaFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getAreas()
  const step = stepper(getAreas(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AreaActions.areaAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getAreas(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AreaActions.areaAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateArea({ id: 1 })
  const step = stepper(updateArea(FixtureAPI, { area: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AreaActions.areaUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateArea(FixtureAPI, { area: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AreaActions.areaUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchAreas()
  const step = stepper(searchAreas(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AreaActions.areaSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchAreas(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AreaActions.areaSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteArea({ id: 1 })
  const step = stepper(deleteArea(FixtureAPI, { areaId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AreaActions.areaDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteArea(FixtureAPI, { areaId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AreaActions.areaDeleteFailure()))
})
