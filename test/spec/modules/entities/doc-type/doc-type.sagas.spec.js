import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getDocType,
  getDocTypes,
  updateDocType,
  deleteDocType,
  searchDocTypes,
} from '../../../../../app/modules/entities/doc-type/doc-type.sagas'
import DocTypeActions from '../../../../../app/modules/entities/doc-type/doc-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getDocType(1)
  const step = stepper(getDocType(FixtureAPI, { docTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocTypeActions.docTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getDocType(FixtureAPI, { docTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocTypeActions.docTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getDocTypes()
  const step = stepper(getDocTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocTypeActions.docTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getDocTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocTypeActions.docTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateDocType({ id: 1 })
  const step = stepper(updateDocType(FixtureAPI, { docType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocTypeActions.docTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateDocType(FixtureAPI, { docType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocTypeActions.docTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchDocTypes()
  const step = stepper(searchDocTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocTypeActions.docTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchDocTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocTypeActions.docTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteDocType({ id: 1 })
  const step = stepper(deleteDocType(FixtureAPI, { docTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(DocTypeActions.docTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteDocType(FixtureAPI, { docTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(DocTypeActions.docTypeDeleteFailure()))
})
