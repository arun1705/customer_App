import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/status-type/status-type.reducer'

test('attempt retrieving a single statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.statusType).toBe(null)
})

test('attempt retrieving a list of statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.statusTypes).toEqual([])
})

test('attempt updating a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.statusType).toEqual({ id: 1 })
})

test('success retrieving a list of statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.statusTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.statusType).toEqual({ id: 1 })
})
test('success searching a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.statusTypes).toEqual({ id: 1 })
})
test('success deleting a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.statusType).toEqual(null)
})

test('failure retrieving a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.statusType).toEqual(null)
})

test('failure retrieving a list of statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.statusTypes).toEqual([])
})

test('failure updating a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.statusType).toEqual(INITIAL_STATE.statusType)
})
test('failure searching a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.statusTypes).toEqual([])
})
test('failure deleting a statusType', () => {
  const state = reducer(INITIAL_STATE, Actions.statusTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.statusType).toEqual(INITIAL_STATE.statusType)
})
