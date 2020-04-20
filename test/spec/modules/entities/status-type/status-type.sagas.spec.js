import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getStatusType,
  getStatusTypes,
  updateStatusType,
  deleteStatusType,
  searchStatusTypes,
} from '../../../../../app/modules/entities/status-type/status-type.sagas'
import StatusTypeActions from '../../../../../app/modules/entities/status-type/status-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getStatusType(1)
  const step = stepper(getStatusType(FixtureAPI, { statusTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getStatusType(FixtureAPI, { statusTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getStatusTypes()
  const step = stepper(getStatusTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getStatusTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateStatusType({ id: 1 })
  const step = stepper(updateStatusType(FixtureAPI, { statusType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateStatusType(FixtureAPI, { statusType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchStatusTypes()
  const step = stepper(searchStatusTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchStatusTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteStatusType({ id: 1 })
  const step = stepper(deleteStatusType(FixtureAPI, { statusTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteStatusType(FixtureAPI, { statusTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(StatusTypeActions.statusTypeDeleteFailure()))
})
