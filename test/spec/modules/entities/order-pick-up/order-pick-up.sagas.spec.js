import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrderPickUp,
  getOrderPickUps,
  updateOrderPickUp,
  deleteOrderPickUp,
  searchOrderPickUps,
} from '../../../../../app/modules/entities/order-pick-up/order-pick-up.sagas'
import OrderPickUpActions from '../../../../../app/modules/entities/order-pick-up/order-pick-up.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrderPickUp(1)
  const step = stepper(getOrderPickUp(FixtureAPI, { orderPickUpId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderPickUp(FixtureAPI, { orderPickUpId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrderPickUps()
  const step = stepper(getOrderPickUps(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderPickUps(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrderPickUp({ id: 1 })
  const step = stepper(updateOrderPickUp(FixtureAPI, { orderPickUp: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrderPickUp(FixtureAPI, { orderPickUp: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrderPickUps()
  const step = stepper(searchOrderPickUps(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrderPickUps(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrderPickUp({ id: 1 })
  const step = stepper(deleteOrderPickUp(FixtureAPI, { orderPickUpId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrderPickUp(FixtureAPI, { orderPickUpId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderPickUpActions.orderPickUpDeleteFailure()))
})
