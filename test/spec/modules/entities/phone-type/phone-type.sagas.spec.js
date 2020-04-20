import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getPhoneType,
  getPhoneTypes,
  updatePhoneType,
  deletePhoneType,
  searchPhoneTypes,
} from '../../../../../app/modules/entities/phone-type/phone-type.sagas'
import PhoneTypeActions from '../../../../../app/modules/entities/phone-type/phone-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getPhoneType(1)
  const step = stepper(getPhoneType(FixtureAPI, { phoneTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getPhoneType(FixtureAPI, { phoneTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getPhoneTypes()
  const step = stepper(getPhoneTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getPhoneTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updatePhoneType({ id: 1 })
  const step = stepper(updatePhoneType(FixtureAPI, { phoneType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updatePhoneType(FixtureAPI, { phoneType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchPhoneTypes()
  const step = stepper(searchPhoneTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchPhoneTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deletePhoneType({ id: 1 })
  const step = stepper(deletePhoneType(FixtureAPI, { phoneTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deletePhoneType(FixtureAPI, { phoneTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneTypeActions.phoneTypeDeleteFailure()))
})
