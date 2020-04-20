import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSMSNotify,
  getSMSNotifies,
  updateSMSNotify,
  deleteSMSNotify,
  searchSMSNotifies,
} from '../../../../../app/modules/entities/sms-notify/sms-notify.sagas'
import SMSNotifyActions from '../../../../../app/modules/entities/sms-notify/sms-notify.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSMSNotify(1)
  const step = stepper(getSMSNotify(FixtureAPI, { smsNotifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSMSNotify(FixtureAPI, { smsNotifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSMSNotifies()
  const step = stepper(getSMSNotifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSMSNotifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSMSNotify({ id: 1 })
  const step = stepper(updateSMSNotify(FixtureAPI, { smsNotify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSMSNotify(FixtureAPI, { smsNotify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSMSNotifies()
  const step = stepper(searchSMSNotifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSMSNotifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSMSNotify({ id: 1 })
  const step = stepper(deleteSMSNotify(FixtureAPI, { smsNotifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSMSNotify(FixtureAPI, { smsNotifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SMSNotifyActions.smsNotifyDeleteFailure()))
})
