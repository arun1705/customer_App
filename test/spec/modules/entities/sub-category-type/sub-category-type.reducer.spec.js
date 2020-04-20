import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sub-category-type/sub-category-type.reducer'

test('attempt retrieving a single subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.subCategoryType).toBe(null)
})

test('attempt retrieving a list of subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.subCategoryTypes).toEqual([])
})

test('attempt updating a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.subCategoryType).toEqual({ id: 1 })
})

test('success retrieving a list of subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.subCategoryTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.subCategoryType).toEqual({ id: 1 })
})
test('success searching a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.subCategoryTypes).toEqual({ id: 1 })
})
test('success deleting a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.subCategoryType).toEqual(null)
})

test('failure retrieving a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.subCategoryType).toEqual(null)
})

test('failure retrieving a list of subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.subCategoryTypes).toEqual([])
})

test('failure updating a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.subCategoryType).toEqual(INITIAL_STATE.subCategoryType)
})
test('failure searching a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.subCategoryTypes).toEqual([])
})
test('failure deleting a subCategoryType', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.subCategoryType).toEqual(INITIAL_STATE.subCategoryType)
})
