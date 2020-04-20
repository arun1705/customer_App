import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/doc-type/doc-type.reducer'

test('attempt retrieving a single docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.docType).toBe(null)
})

test('attempt retrieving a list of docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.docTypes).toEqual([])
})

test('attempt updating a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.docType).toEqual({ id: 1 })
})

test('success retrieving a list of docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.docTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.docType).toEqual({ id: 1 })
})
test('success searching a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.docTypes).toEqual({ id: 1 })
})
test('success deleting a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.docType).toEqual(null)
})

test('failure retrieving a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.docType).toEqual(null)
})

test('failure retrieving a list of docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.docTypes).toEqual([])
})

test('failure updating a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.docType).toEqual(INITIAL_STATE.docType)
})
test('failure searching a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.docTypes).toEqual([])
})
test('failure deleting a docType', () => {
  const state = reducer(INITIAL_STATE, Actions.docTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.docType).toEqual(INITIAL_STATE.docType)
})
