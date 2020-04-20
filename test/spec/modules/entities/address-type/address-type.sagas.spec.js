import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getAddressType,
  getAddressTypes,
  updateAddressType,
  deleteAddressType,
  searchAddressTypes,
} from '../../../../../app/modules/entities/address-type/address-type.sagas'
import AddressTypeActions from '../../../../../app/modules/entities/address-type/address-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getAddressType(1)
  const step = stepper(getAddressType(FixtureAPI, { addressTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getAddressType(FixtureAPI, { addressTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getAddressTypes()
  const step = stepper(getAddressTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getAddressTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateAddressType({ id: 1 })
  const step = stepper(updateAddressType(FixtureAPI, { addressType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateAddressType(FixtureAPI, { addressType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchAddressTypes()
  const step = stepper(searchAddressTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchAddressTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteAddressType({ id: 1 })
  const step = stepper(deleteAddressType(FixtureAPI, { addressTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteAddressType(FixtureAPI, { addressTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AddressTypeActions.addressTypeDeleteFailure()))
})
