import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getStatus, getStatuses, updateStatus, deleteStatus, searchStatuses } from '../../../../../app/modules/entities/status/status.sagas'
import StatusActions from '../../../../../app/modules/entities/status/status.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getStatus(1)
  const step = stepper(getStatus(FixtureAPI, { statusId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusActions.statusSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getStatus(FixtureAPI, { statusId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusActions.statusFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getStatuses()
  const step = stepper(getStatuses(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusActions.statusAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getStatuses(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusActions.statusAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateStatus({ id: 1 })
  const step = stepper(updateStatus(FixtureAPI, { status: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusActions.statusUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateStatus(FixtureAPI, { status: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusActions.statusUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchStatuses()
  const step = stepper(searchStatuses(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusActions.statusSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchStatuses(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusActions.statusSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteStatus({ id: 1 })
  const step = stepper(deleteStatus(FixtureAPI, { statusId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusActions.statusDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteStatus(FixtureAPI, { statusId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusActions.statusDeleteFailure()))
})
