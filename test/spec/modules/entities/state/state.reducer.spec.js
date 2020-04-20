import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/state/state.reducer'

test('attempt retrieving a single state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.state).toBe(null)
})

test('attempt retrieving a list of state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.states).toEqual([])
})

test('attempt updating a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.state).toEqual({ id: 1 })
})

test('success retrieving a list of state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.states).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.state).toEqual({ id: 1 })
})
test('success searching a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.states).toEqual({ id: 1 })
})
test('success deleting a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.state).toEqual(null)
})

test('failure retrieving a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.state).toEqual(null)
})

test('failure retrieving a list of state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.states).toEqual([])
})

test('failure updating a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.state).toEqual(INITIAL_STATE.state)
})
test('failure searching a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.states).toEqual([])
})
test('failure deleting a state', () => {
  const state = reducer(INITIAL_STATE, Actions.stateDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.state).toEqual(INITIAL_STATE.state)
})
