import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getUserPoint,
  getUserPoints,
  updateUserPoint,
  deleteUserPoint,
  searchUserPoints,
} from '../../../../../app/modules/entities/user-point/user-point.sagas'
import UserPointActions from '../../../../../app/modules/entities/user-point/user-point.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getUserPoint(1)
  const step = stepper(getUserPoint(FixtureAPI, { userPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointActions.userPointSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserPoint(FixtureAPI, { userPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointActions.userPointFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getUserPoints()
  const step = stepper(getUserPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointActions.userPointAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserPoints(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointActions.userPointAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateUserPoint({ id: 1 })
  const step = stepper(updateUserPoint(FixtureAPI, { userPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointActions.userPointUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateUserPoint(FixtureAPI, { userPoint: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointActions.userPointUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchUserPoints()
  const step = stepper(searchUserPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointActions.userPointSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchUserPoints(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointActions.userPointSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteUserPoint({ id: 1 })
  const step = stepper(deleteUserPoint(FixtureAPI, { userPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointActions.userPointDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteUserPoint(FixtureAPI, { userPointId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointActions.userPointDeleteFailure()))
})
