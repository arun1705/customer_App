import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getUserDoc,
  getUserDocs,
  updateUserDoc,
  deleteUserDoc,
  searchUserDocs,
} from '../../../../../app/modules/entities/user-doc/user-doc.sagas'
import UserDocActions from '../../../../../app/modules/entities/user-doc/user-doc.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getUserDoc(1)
  const step = stepper(getUserDoc(FixtureAPI, { userDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserDocActions.userDocSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserDoc(FixtureAPI, { userDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserDocActions.userDocFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getUserDocs()
  const step = stepper(getUserDocs(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserDocActions.userDocAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getUserDocs(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserDocActions.userDocAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateUserDoc({ id: 1 })
  const step = stepper(updateUserDoc(FixtureAPI, { userDoc: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserDocActions.userDocUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateUserDoc(FixtureAPI, { userDoc: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserDocActions.userDocUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchUserDocs()
  const step = stepper(searchUserDocs(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserDocActions.userDocSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchUserDocs(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserDocActions.userDocSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteUserDoc({ id: 1 })
  const step = stepper(deleteUserDoc(FixtureAPI, { userDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserDocActions.userDocDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteUserDoc(FixtureAPI, { userDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserDocActions.userDocDeleteFailure()))
})
