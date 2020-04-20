import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
  searchAddresses,
} from '../../../../../app/modules/entities/address/address.sagas'
import AddressActions from '../../../../../app/modules/entities/address/address.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getAddress(1)
  const step = stepper(getAddress(FixtureAPI, { addressId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressActions.addressSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getAddress(FixtureAPI, { addressId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressActions.addressFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getAddresses()
  const step = stepper(getAddresses(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressActions.addressAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getAddresses(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressActions.addressAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateAddress({ id: 1 })
  const step = stepper(updateAddress(FixtureAPI, { address: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressActions.addressUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateAddress(FixtureAPI, { address: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressActions.addressUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchAddresses()
  const step = stepper(searchAddresses(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressActions.addressSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchAddresses(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressActions.addressSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteAddress({ id: 1 })
  const step = stepper(deleteAddress(FixtureAPI, { addressId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressActions.addressDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteAddress(FixtureAPI, { addressId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressActions.addressDeleteFailure()))
})
