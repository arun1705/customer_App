import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/status/status.reducer'

test('attempt retrieving a single status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.status).toBe(null)
})

test('attempt retrieving a list of status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.statuses).toEqual([])
})

test('attempt updating a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.status).toEqual({ id: 1 })
})

test('success retrieving a list of status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.statuses).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.status).toEqual({ id: 1 })
})
test('success searching a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.statuses).toEqual({ id: 1 })
})
test('success deleting a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.status).toEqual(null)
})

test('failure retrieving a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.status).toEqual(null)
})

test('failure retrieving a list of status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.statuses).toEqual([])
})

test('failure updating a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.status).toEqual(INITIAL_STATE.status)
})
test('failure searching a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.statuses).toEqual([])
})
test('failure deleting a status', () => {
  const state = reducer(INITIAL_STATE, Actions.statusDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.status).toEqual(INITIAL_STATE.status)
})
