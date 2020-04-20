import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrderRequest,
  getOrderRequests,
  updateOrderRequest,
  deleteOrderRequest,
  searchOrderRequests,
} from '../../../../../app/modules/entities/order-request/order-request.sagas'
import OrderRequestActions from '../../../../../app/modules/entities/order-request/order-request.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrderRequest(1)
  const step = stepper(getOrderRequest(FixtureAPI, { orderRequestId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderRequest(FixtureAPI, { orderRequestId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrderRequests()
  const step = stepper(getOrderRequests(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderRequests(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrderRequest({ id: 1 })
  const step = stepper(updateOrderRequest(FixtureAPI, { orderRequest: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrderRequest(FixtureAPI, { orderRequest: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrderRequests()
  const step = stepper(searchOrderRequests(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrderRequests(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrderRequest({ id: 1 })
  const step = stepper(deleteOrderRequest(FixtureAPI, { orderRequestId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrderRequest(FixtureAPI, { orderRequestId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderRequestActions.orderRequestDeleteFailure()))
})
