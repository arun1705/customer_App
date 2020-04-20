import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSubCategoryType,
  getSubCategoryTypes,
  updateSubCategoryType,
  deleteSubCategoryType,
  searchSubCategoryTypes,
} from '../../../../../app/modules/entities/sub-category-type/sub-category-type.sagas'
import SubCategoryTypeActions from '../../../../../app/modules/entities/sub-category-type/sub-category-type.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSubCategoryType(1)
  const step = stepper(getSubCategoryType(FixtureAPI, { subCategoryTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSubCategoryType(FixtureAPI, { subCategoryTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSubCategoryTypes()
  const step = stepper(getSubCategoryTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSubCategoryTypes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSubCategoryType({ id: 1 })
  const step = stepper(updateSubCategoryType(FixtureAPI, { subCategoryType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSubCategoryType(FixtureAPI, { subCategoryType: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSubCategoryTypes()
  const step = stepper(searchSubCategoryTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSubCategoryTypes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSubCategoryType({ id: 1 })
  const step = stepper(deleteSubCategoryType(FixtureAPI, { subCategoryTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSubCategoryType(FixtureAPI, { subCategoryTypeId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryTypeActions.subCategoryTypeDeleteFailure()))
})
