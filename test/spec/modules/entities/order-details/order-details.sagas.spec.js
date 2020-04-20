import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrderDetail,
  getOrderDetails,
  updateOrderDetail,
  deleteOrderDetail,
  searchOrderDetails,
} from '../../../../../app/modules/entities/order-details/order-details.sagas'
import OrderDetailActions from '../../../../../app/modules/entities/order-details/order-details.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrderDetail(1)
  const step = stepper(getOrderDetail(FixtureAPI, { orderDetailId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderDetail(FixtureAPI, { orderDetailId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrderDetails()
  const step = stepper(getOrderDetails(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderDetails(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrderDetail({ id: 1 })
  const step = stepper(updateOrderDetail(FixtureAPI, { orderDetail: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrderDetail(FixtureAPI, { orderDetail: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrderDetails()
  const step = stepper(searchOrderDetails(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrderDetails(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrderDetail({ id: 1 })
  const step = stepper(deleteOrderDetail(FixtureAPI, { orderDetailId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrderDetail(FixtureAPI, { orderDetailId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDetailActions.orderDetailDeleteFailure()))
})
