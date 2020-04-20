import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/user-type/user-type.reducer'

test('attempt retrieving a single userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.userType).toBe(null)
})

test('attempt retrieving a list of userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.userTypes).toEqual([])
})

test('attempt updating a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.userType).toEqual({ id: 1 })
})

test('success retrieving a list of userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.userTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.userType).toEqual({ id: 1 })
})
test('success searching a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.userTypes).toEqual({ id: 1 })
})
test('success deleting a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.userType).toEqual(null)
})

test('failure retrieving a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.userType).toEqual(null)
})

test('failure retrieving a list of userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.userTypes).toEqual([])
})

test('failure updating a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.userType).toEqual(INITIAL_STATE.userType)
})
test('failure searching a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.userTypes).toEqual([])
})
test('failure deleting a userType', () => {
  const state = reducer(INITIAL_STATE, Actions.userTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.userType).toEqual(INITIAL_STATE.userType)
})
