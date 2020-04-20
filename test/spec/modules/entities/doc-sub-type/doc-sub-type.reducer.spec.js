import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/doc-sub-type/doc-sub-type.reducer'

test('attempt retrieving a single docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.docSubType).toBe(null)
})

test('attempt retrieving a list of docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.docSubTypes).toEqual([])
})

test('attempt updating a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.docSubType).toEqual({ id: 1 })
})

test('success retrieving a list of docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.docSubTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.docSubType).toEqual({ id: 1 })
})
test('success searching a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.docSubTypes).toEqual({ id: 1 })
})
test('success deleting a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.docSubType).toEqual(null)
})

test('failure retrieving a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.docSubType).toEqual(null)
})

test('failure retrieving a list of docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.docSubTypes).toEqual([])
})

test('failure updating a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.docSubType).toEqual(INITIAL_STATE.docSubType)
})
test('failure searching a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.docSubTypes).toEqual([])
})
test('failure deleting a docSubType', () => {
  const state = reducer(INITIAL_STATE, Actions.docSubTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.docSubType).toEqual(INITIAL_STATE.docSubType)
})
