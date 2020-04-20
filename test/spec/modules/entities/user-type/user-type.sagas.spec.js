import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getUserType,
  getUserTypes,
  updateUserType,
  deleteUserType,
  searchUserTypes,
} from '../../../../../app/modules/entities/user-type/user-type.sagas'
import UserTypeActions from '../../../../../app/modules/entities/user-type/user-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getUserType(1)
  const step = stepper(getUserType(FixtureAPI, { userTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserTypeActions.userTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserType(FixtureAPI, { userTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserTypeActions.userTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getUserTypes()
  const step = stepper(getUserTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserTypeActions.userTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserTypeActions.userTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateUserType({ id: 1 })
  const step = stepper(updateUserType(FixtureAPI, { userType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserTypeActions.userTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateUserType(FixtureAPI, { userType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserTypeActions.userTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchUserTypes()
  const step = stepper(searchUserTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserTypeActions.userTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchUserTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserTypeActions.userTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteUserType({ id: 1 })
  const step = stepper(deleteUserType(FixtureAPI, { userTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserTypeActions.userTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteUserType(FixtureAPI, { userTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserTypeActions.userTypeDeleteFailure()))
})
