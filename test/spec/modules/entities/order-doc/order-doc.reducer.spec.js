import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/order-doc/order-doc.reducer'

test('attempt retrieving a single orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.orderDoc).toBe(null)
})

test('attempt retrieving a list of orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.orderDocs).toEqual([])
})

test('attempt updating a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.orderDoc).toEqual({ id: 1 })
})

test('success retrieving a list of orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.orderDocs).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.orderDoc).toEqual({ id: 1 })
})
test('success searching a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.orderDocs).toEqual({ id: 1 })
})
test('success deleting a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.orderDoc).toEqual(null)
})

test('failure retrieving a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.orderDoc).toEqual(null)
})

test('failure retrieving a list of orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.orderDocs).toEqual([])
})

test('failure updating a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.orderDoc).toEqual(INITIAL_STATE.orderDoc)
})
test('failure searching a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.orderDocs).toEqual([])
})
test('failure deleting a orderDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.orderDocDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.orderDoc).toEqual(INITIAL_STATE.orderDoc)
})
