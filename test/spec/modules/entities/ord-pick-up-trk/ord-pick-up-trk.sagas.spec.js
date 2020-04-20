import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrdPickUpTrk,
  getOrdPickUpTrks,
  updateOrdPickUpTrk,
  deleteOrdPickUpTrk,
  searchOrdPickUpTrks,
} from '../../../../../app/modules/entities/ord-pick-up-trk/ord-pick-up-trk.sagas'
import OrdPickUpTrkActions from '../../../../../app/modules/entities/ord-pick-up-trk/ord-pick-up-trk.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrdPickUpTrk(1)
  const step = stepper(getOrdPickUpTrk(FixtureAPI, { ordPickUpTrkId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrdPickUpTrk(FixtureAPI, { ordPickUpTrkId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrdPickUpTrks()
  const step = stepper(getOrdPickUpTrks(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrdPickUpTrks(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrdPickUpTrk({ id: 1 })
  const step = stepper(updateOrdPickUpTrk(FixtureAPI, { ordPickUpTrk: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrdPickUpTrk(FixtureAPI, { ordPickUpTrk: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrdPickUpTrks()
  const step = stepper(searchOrdPickUpTrks(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrdPickUpTrks(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrdPickUpTrk({ id: 1 })
  const step = stepper(deleteOrdPickUpTrk(FixtureAPI, { ordPickUpTrkId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrdPickUpTrk(FixtureAPI, { ordPickUpTrkId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrdPickUpTrkActions.ordPickUpTrkDeleteFailure()))
})
