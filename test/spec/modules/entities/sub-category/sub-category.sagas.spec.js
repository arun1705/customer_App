import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  searchSubCategories,
} from '../../../../../app/modules/entities/sub-category/sub-category.sagas'
import SubCategoryActions from '../../../../../app/modules/entities/sub-category/sub-category.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getSubCategory(1)
  const step = stepper(getSubCategory(FixtureAPI, { subCategoryId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryActions.subCategorySuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getSubCategory(FixtureAPI, { subCategoryId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getSubCategories()
  const step = stepper(getSubCategories(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getSubCategories(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateSubCategory({ id: 1 })
  const step = stepper(updateSubCategory(FixtureAPI, { subCategory: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateSubCategory(FixtureAPI, { subCategory: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchSubCategories()
  const step = stepper(searchSubCategories(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryActions.subCategorySearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchSubCategories(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryActions.subCategorySearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteSubCategory({ id: 1 })
  const step = stepper(deleteSubCategory(FixtureAPI, { subCategoryId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteSubCategory(FixtureAPI, { subCategoryId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(SubCategoryActions.subCategoryDeleteFailure()))
})
