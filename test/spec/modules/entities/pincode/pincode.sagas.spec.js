import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getPincode,
  getPincodes,
  updatePincode,
  deletePincode,
  searchPincodes,
} from '../../../../../app/modules/entities/pincode/pincode.sagas'
import PincodeActions from '../../../../../app/modules/entities/pincode/pincode.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getPincode(1)
  const step = stepper(getPincode(FixtureAPI, { pincodeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PincodeActions.pincodeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getPincode(FixtureAPI, { pincodeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PincodeActions.pincodeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getPincodes()
  const step = stepper(getPincodes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PincodeActions.pincodeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getPincodes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PincodeActions.pincodeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updatePincode({ id: 1 })
  const step = stepper(updatePincode(FixtureAPI, { pincode: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PincodeActions.pincodeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updatePincode(FixtureAPI, { pincode: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PincodeActions.pincodeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchPincodes()
  const step = stepper(searchPincodes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PincodeActions.pincodeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchPincodes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PincodeActions.pincodeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deletePincode({ id: 1 })
  const step = stepper(deletePincode(FixtureAPI, { pincodeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PincodeActions.pincodeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deletePincode(FixtureAPI, { pincodeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PincodeActions.pincodeDeleteFailure()))
})
