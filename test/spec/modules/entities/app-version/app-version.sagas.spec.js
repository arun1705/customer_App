import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getAppVersion,
  getAppVersions,
  updateAppVersion,
  deleteAppVersion,
  searchAppVersions,
} from '../../../../../app/modules/entities/app-version/app-version.sagas'
import AppVersionActions from '../../../../../app/modules/entities/app-version/app-version.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getAppVersion(1)
  const step = stepper(getAppVersion(FixtureAPI, { appVersionId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AppVersionActions.appVersionSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getAppVersion(FixtureAPI, { appVersionId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AppVersionActions.appVersionFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getAppVersions()
  const step = stepper(getAppVersions(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AppVersionActions.appVersionAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getAppVersions(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AppVersionActions.appVersionAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateAppVersion({ id: 1 })
  const step = stepper(updateAppVersion(FixtureAPI, { appVersion: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AppVersionActions.appVersionUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateAppVersion(FixtureAPI, { appVersion: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AppVersionActions.appVersionUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchAppVersions()
  const step = stepper(searchAppVersions(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AppVersionActions.appVersionSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchAppVersions(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AppVersionActions.appVersionSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteAppVersion({ id: 1 })
  const step = stepper(deleteAppVersion(FixtureAPI, { appVersionId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(AppVersionActions.appVersionDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteAppVersion(FixtureAPI, { appVersionId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(AppVersionActions.appVersionDeleteFailure()))
})
