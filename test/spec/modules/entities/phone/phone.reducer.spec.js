import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/phone/phone.reducer'

test('attempt retrieving a single phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.phone).toBe(null)
})

test('attempt retrieving a list of phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.phones).toEqual([])
})

test('attempt updating a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.phone).toEqual({ id: 1 })
})

test('success retrieving a list of phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.phones).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.phone).toEqual({ id: 1 })
})
test('success searching a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.phones).toEqual({ id: 1 })
})
test('success deleting a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.phone).toEqual(null)
})

test('failure retrieving a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.phone).toEqual(null)
})

test('failure retrieving a list of phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.phones).toEqual([])
})

test('failure updating a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.phone).toEqual(INITIAL_STATE.phone)
})
test('failure searching a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.phones).toEqual([])
})
test('failure deleting a phone', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.phone).toEqual(INITIAL_STATE.phone)
})
