import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getDocSubType,
  getDocSubTypes,
  updateDocSubType,
  deleteDocSubType,
  searchDocSubTypes,
} from '../../../../../app/modules/entities/doc-sub-type/doc-sub-type.sagas'
import DocSubTypeActions from '../../../../../app/modules/entities/doc-sub-type/doc-sub-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getDocSubType(1)
  const step = stepper(getDocSubType(FixtureAPI, { docSubTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getDocSubType(FixtureAPI, { docSubTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getDocSubTypes()
  const step = stepper(getDocSubTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getDocSubTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateDocSubType({ id: 1 })
  const step = stepper(updateDocSubType(FixtureAPI, { docSubType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateDocSubType(FixtureAPI, { docSubType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchDocSubTypes()
  const step = stepper(searchDocSubTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchDocSubTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteDocSubType({ id: 1 })
  const step = stepper(deleteDocSubType(FixtureAPI, { docSubTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteDocSubType(FixtureAPI, { docSubTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocSubTypeActions.docSubTypeDeleteFailure()))
})
