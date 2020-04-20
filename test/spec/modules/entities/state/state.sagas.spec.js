import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getState, getStates, updateState, deleteState, searchStates } from '../../../../../app/modules/entities/state/state.sagas'
import StateActions from '../../../../../app/modules/entities/state/state.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getState(1)
  const step = stepper(getState(FixtureAPI, { stateId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StateActions.stateSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getState(FixtureAPI, { stateId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StateActions.stateFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getStates()
  const step = stepper(getStates(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StateActions.stateAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getStates(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StateActions.stateAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateState({ id: 1 })
  const step = stepper(updateState(FixtureAPI, { state: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StateActions.stateUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateState(FixtureAPI, { state: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StateActions.stateUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchStates()
  const step = stepper(searchStates(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StateActions.stateSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchStates(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StateActions.stateSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteState({ id: 1 })
  const step = stepper(deleteState(FixtureAPI, { stateId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StateActions.stateDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteState(FixtureAPI, { stateId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StateActions.stateDeleteFailure()))
})
