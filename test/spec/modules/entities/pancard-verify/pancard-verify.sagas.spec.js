import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getPancardVerify,
  getPancardVerifies,
  updatePancardVerify,
  deletePancardVerify,
  searchPancardVerifies,
} from '../../../../../app/modules/entities/pancard-verify/pancard-verify.sagas'
import PancardVerifyActions from '../../../../../app/modules/entities/pancard-verify/pancard-verify.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getPancardVerify(1)
  const step = stepper(getPancardVerify(FixtureAPI, { pancardVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getPancardVerify(FixtureAPI, { pancardVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getPancardVerifies()
  const step = stepper(getPancardVerifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getPancardVerifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updatePancardVerify({ id: 1 })
  const step = stepper(updatePancardVerify(FixtureAPI, { pancardVerify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updatePancardVerify(FixtureAPI, { pancardVerify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchPancardVerifies()
  const step = stepper(searchPancardVerifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchPancardVerifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deletePancardVerify({ id: 1 })
  const step = stepper(deletePancardVerify(FixtureAPI, { pancardVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deletePancardVerify(FixtureAPI, { pancardVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PancardVerifyActions.pancardVerifyDeleteFailure()))
})
