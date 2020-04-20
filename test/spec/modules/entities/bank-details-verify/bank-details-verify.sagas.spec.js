import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getBankDetailsVerify,
  getBankDetailsVerifies,
  updateBankDetailsVerify,
  deleteBankDetailsVerify,
  searchBankDetailsVerifies,
} from '../../../../../app/modules/entities/bank-details-verify/bank-details-verify.sagas'
import BankDetailsVerifyActions from '../../../../../app/modules/entities/bank-details-verify/bank-details-verify.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getBankDetailsVerify(1)
  const step = stepper(getBankDetailsVerify(FixtureAPI, { bankDetailsVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getBankDetailsVerify(FixtureAPI, { bankDetailsVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getBankDetailsVerifies()
  const step = stepper(getBankDetailsVerifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getBankDetailsVerifies(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateBankDetailsVerify({ id: 1 })
  const step = stepper(updateBankDetailsVerify(FixtureAPI, { bankDetailsVerify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateBankDetailsVerify(FixtureAPI, { bankDetailsVerify: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchBankDetailsVerifies()
  const step = stepper(searchBankDetailsVerifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchBankDetailsVerifies(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteBankDetailsVerify({ id: 1 })
  const step = stepper(deleteBankDetailsVerify(FixtureAPI, { bankDetailsVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteBankDetailsVerify(FixtureAPI, { bankDetailsVerifyId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(BankDetailsVerifyActions.bankDetailsVerifyDeleteFailure()))
})
