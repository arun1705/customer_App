import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getEmailType,
  getEmailTypes,
  updateEmailType,
  deleteEmailType,
  searchEmailTypes,
} from '../../../../../app/modules/entities/email-type/email-type.sagas'
import EmailTypeActions from '../../../../../app/modules/entities/email-type/email-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getEmailType(1)
  const step = stepper(getEmailType(FixtureAPI, { emailTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getEmailType(FixtureAPI, { emailTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getEmailTypes()
  const step = stepper(getEmailTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getEmailTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateEmailType({ id: 1 })
  const step = stepper(updateEmailType(FixtureAPI, { emailType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateEmailType(FixtureAPI, { emailType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchEmailTypes()
  const step = stepper(searchEmailTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchEmailTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteEmailType({ id: 1 })
  const step = stepper(deleteEmailType(FixtureAPI, { emailTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteEmailType(FixtureAPI, { emailTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailTypeActions.emailTypeDeleteFailure()))
})
