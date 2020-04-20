import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/order-pick-up/order-pick-up.reducer'

test('attempt retrieving a single orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.orderPickUp).toBe(null)
})

test('attempt retrieving a list of orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.orderPickUps).toEqual([])
})

test('attempt updating a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.orderPickUp).toEqual({ id: 1 })
})

test('success retrieving a list of orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.orderPickUps).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.orderPickUp).toEqual({ id: 1 })
})
test('success searching a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.orderPickUps).toEqual({ id: 1 })
})
test('success deleting a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.orderPickUp).toEqual(null)
})

test('failure retrieving a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.orderPickUp).toEqual(null)
})

test('failure retrieving a list of orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.orderPickUps).toEqual([])
})

test('failure updating a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.orderPickUp).toEqual(INITIAL_STATE.orderPickUp)
})
test('failure searching a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.orderPickUps).toEqual([])
})
test('failure deleting a orderPickUp', () => {
  const state = reducer(INITIAL_STATE, Actions.orderPickUpDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.orderPickUp).toEqual(INITIAL_STATE.orderPickUp)
})
