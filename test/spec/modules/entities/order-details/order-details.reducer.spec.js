import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/order-details/order-details.reducer'

test('attempt retrieving a single orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.orderDetail).toBe(null)
})

test('attempt retrieving a list of orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.orderDetails).toEqual([])
})

test('attempt updating a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.orderDetail).toEqual({ id: 1 })
})

test('success retrieving a list of orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.orderDetails).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.orderDetail).toEqual({ id: 1 })
})
test('success searching a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.orderDetails).toEqual({ id: 1 })
})
test('success deleting a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.orderDetail).toEqual(null)
})

test('failure retrieving a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.orderDetail).toEqual(null)
})

test('failure retrieving a list of orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.orderDetails).toEqual([])
})

test('failure updating a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.orderDetail).toEqual(INITIAL_STATE.orderDetail)
})
test('failure searching a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.orderDetails).toEqual([])
})
test('failure deleting a orderDetail', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDetailDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.orderDetail).toEqual(INITIAL_STATE.orderDetail)
})
