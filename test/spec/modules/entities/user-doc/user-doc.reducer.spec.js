import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/user-doc/user-doc.reducer'

test('attempt retrieving a single userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.userDoc).toBe(null)
})

test('attempt retrieving a list of userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.userDocs).toEqual([])
})

test('attempt updating a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.userDoc).toEqual({ id: 1 })
})

test('success retrieving a list of userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.userDocs).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.userDoc).toEqual({ id: 1 })
})
test('success searching a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.userDocs).toEqual({ id: 1 })
})
test('success deleting a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.userDoc).toEqual(null)
})

test('failure retrieving a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.userDoc).toEqual(null)
})

test('failure retrieving a list of userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.userDocs).toEqual([])
})

test('failure updating a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.userDoc).toEqual(INITIAL_STATE.userDoc)
})
test('failure searching a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.userDocs).toEqual([])
})
test('failure deleting a userDoc', () => {
  const state = reducer(INITIAL_STATE, Actions.userDocDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.userDoc).toEqual(INITIAL_STATE.userDoc)
})
