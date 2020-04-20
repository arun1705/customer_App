import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrdDtlTran,
  getOrdDtlTrans,
  updateOrdDtlTran,
  deleteOrdDtlTran,
  searchOrdDtlTrans,
} from '../../../../../app/modules/entities/ord-dtl-trans/ord-dtl-trans.sagas'
import OrdDtlTranActions from '../../../../../app/modules/entities/ord-dtl-trans/ord-dtl-trans.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrdDtlTran(1)
  const step = stepper(getOrdDtlTran(FixtureAPI, { ordDtlTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrdDtlTran(FixtureAPI, { ordDtlTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrdDtlTrans()
  const step = stepper(getOrdDtlTrans(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrdDtlTrans(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrdDtlTran({ id: 1 })
  const step = stepper(updateOrdDtlTran(FixtureAPI, { ordDtlTran: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrdDtlTran(FixtureAPI, { ordDtlTran: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrdDtlTrans()
  const step = stepper(searchOrdDtlTrans(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrdDtlTrans(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrdDtlTran({ id: 1 })
  const step = stepper(deleteOrdDtlTran(FixtureAPI, { ordDtlTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrdDtlTran(FixtureAPI, { ordDtlTranId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdDtlTranActions.ordDtlTranDeleteFailure()))
})
