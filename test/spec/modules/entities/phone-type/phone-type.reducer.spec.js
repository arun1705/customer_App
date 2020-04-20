import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/phone-type/phone-type.reducer'

test('attempt retrieving a single phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.phoneType).toBe(null)
})

test('attempt retrieving a list of phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.phoneTypes).toEqual([])
})

test('attempt updating a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.phoneType).toEqual({ id: 1 })
})

test('success retrieving a list of phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.phoneTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.phoneType).toEqual({ id: 1 })
})
test('success searching a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.phoneTypes).toEqual({ id: 1 })
})
test('success deleting a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.phoneType).toEqual(null)
})

test('failure retrieving a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.phoneType).toEqual(null)
})

test('failure retrieving a list of phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.phoneTypes).toEqual([])
})

test('failure updating a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.phoneType).toEqual(INITIAL_STATE.phoneType)
})
test('failure searching a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.phoneTypes).toEqual([])
})
test('failure deleting a phoneType', () => {
  const state = reducer(INITIAL_STATE, Actions.phoneTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.phoneType).toEqual(INITIAL_STATE.phoneType)
})
