import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getPhone, getPhones, updatePhone, deletePhone, searchPhones } from '../../../../../app/modules/entities/phone/phone.sagas'
import PhoneActions from '../../../../../app/modules/entities/phone/phone.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getPhone(1)
  const step = stepper(getPhone(FixtureAPI, { phoneId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneActions.phoneSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getPhone(FixtureAPI, { phoneId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneActions.phoneFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getPhones()
  const step = stepper(getPhones(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneActions.phoneAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getPhones(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneActions.phoneAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updatePhone({ id: 1 })
  const step = stepper(updatePhone(FixtureAPI, { phone: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneActions.phoneUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updatePhone(FixtureAPI, { phone: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneActions.phoneUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchPhones()
  const step = stepper(searchPhones(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneActions.phoneSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchPhones(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneActions.phoneSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deletePhone({ id: 1 })
  const step = stepper(deletePhone(FixtureAPI, { phoneId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(PhoneActions.phoneDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deletePhone(FixtureAPI, { phoneId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(PhoneActions.phoneDeleteFailure()))
})
