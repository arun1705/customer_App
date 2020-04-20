import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getUserPointTran,
  getUserPointTrans,
  updateUserPointTran,
  deleteUserPointTran,
  searchUserPointTrans,
} from '../../../../../app/modules/entities/user-point-trans/user-point-trans.sagas'
import UserPointTranActions from '../../../../../app/modules/entities/user-point-trans/user-point-trans.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getUserPointTran(1)
  const step = stepper(getUserPointTran(FixtureAPI, { userPointTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserPointTran(FixtureAPI, { userPointTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getUserPointTrans()
  const step = stepper(getUserPointTrans(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserPointTrans(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateUserPointTran({ id: 1 })
  const step = stepper(updateUserPointTran(FixtureAPI, { userPointTran: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateUserPointTran(FixtureAPI, { userPointTran: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchUserPointTrans()
  const step = stepper(searchUserPointTrans(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchUserPointTrans(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteUserPointTran({ id: 1 })
  const step = stepper(deleteUserPointTran(FixtureAPI, { userPointTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteUserPointTran(FixtureAPI, { userPointTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserPointTranActions.userPointTranDeleteFailure()))
})
