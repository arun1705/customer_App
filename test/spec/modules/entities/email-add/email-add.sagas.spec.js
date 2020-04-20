import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getEmailAdd,
  getEmailAdds,
  updateEmailAdd,
  deleteEmailAdd,
  searchEmailAdds,
} from '../../../../../app/modules/entities/email-add/email-add.sagas'
import EmailAddActions from '../../../../../app/modules/entities/email-add/email-add.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getEmailAdd(1)
  const step = stepper(getEmailAdd(FixtureAPI, { emailAddId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailAddActions.emailAddSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getEmailAdd(FixtureAPI, { emailAddId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailAddActions.emailAddFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getEmailAdds()
  const step = stepper(getEmailAdds(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailAddActions.emailAddAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getEmailAdds(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailAddActions.emailAddAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateEmailAdd({ id: 1 })
  const step = stepper(updateEmailAdd(FixtureAPI, { emailAdd: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailAddActions.emailAddUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateEmailAdd(FixtureAPI, { emailAdd: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailAddActions.emailAddUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchEmailAdds()
  const step = stepper(searchEmailAdds(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailAddActions.emailAddSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchEmailAdds(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailAddActions.emailAddSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteEmailAdd({ id: 1 })
  const step = stepper(deleteEmailAdd(FixtureAPI, { emailAddId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(EmailAddActions.emailAddDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteEmailAdd(FixtureAPI, { emailAddId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(EmailAddActions.emailAddDeleteFailure()))
})
