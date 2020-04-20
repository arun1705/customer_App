import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getOrderDoc,
  getOrderDocs,
  updateOrderDoc,
  deleteOrderDoc,
  searchOrderDocs,
} from '../../../../../app/modules/entities/order-doc/order-doc.sagas'
import OrderDocActions from '../../../../../app/modules/entities/order-doc/order-doc.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getOrderDoc(1)
  const step = stepper(getOrderDoc(FixtureAPI, { orderDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDocActions.orderDocSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderDoc(FixtureAPI, { orderDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDocActions.orderDocFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getOrderDocs()
  const step = stepper(getOrderDocs(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDocActions.orderDocAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getOrderDocs(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDocActions.orderDocAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateOrderDoc({ id: 1 })
  const step = stepper(updateOrderDoc(FixtureAPI, { orderDoc: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDocActions.orderDocUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateOrderDoc(FixtureAPI, { orderDoc: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDocActions.orderDocUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchOrderDocs()
  const step = stepper(searchOrderDocs(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDocActions.orderDocSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchOrderDocs(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDocActions.orderDocSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteOrderDoc({ id: 1 })
  const step = stepper(deleteOrderDoc(FixtureAPI, { orderDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(OrderDocActions.orderDocDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteOrderDoc(FixtureAPI, { orderDocId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(OrderDocActions.orderDocDeleteFailure()))
})
