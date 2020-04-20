import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/order-request/order-request.reducer'

test('attempt retrieving a single orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.orderRequest).toBe(null)
})

test('attempt retrieving a list of orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.orderRequests).toEqual([])
})

test('attempt updating a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.orderRequest).toEqual({ id: 1 })
})

test('success retrieving a list of orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.orderRequests).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.orderRequest).toEqual({ id: 1 })
})
test('success searching a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.orderRequests).toEqual({ id: 1 })
})
test('success deleting a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.orderRequest).toEqual(null)
})

test('failure retrieving a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.orderRequest).toEqual(null)
})

test('failure retrieving a list of orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.orderRequests).toEqual([])
})

test('failure updating a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.orderRequest).toEqual(INITIAL_STATE.orderRequest)
})
test('failure searching a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.orderRequests).toEqual([])
})
test('failure deleting a orderRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.orderRequestDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.orderRequest).toEqual(INITIAL_STATE.orderRequest)
})
