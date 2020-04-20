import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sub-category/sub-category.reducer'

test('attempt retrieving a single subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.subCategory).toBe(null)
})

test('attempt retrieving a list of subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.subCategories).toEqual([])
})

test('attempt updating a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategorySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategorySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.subCategory).toEqual({ id: 1 })
})

test('success retrieving a list of subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.subCategories).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.subCategory).toEqual({ id: 1 })
})
test('success searching a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategorySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.subCategories).toEqual({ id: 1 })
})
test('success deleting a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.subCategory).toEqual(null)
})

test('failure retrieving a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.subCategory).toEqual(null)
})

test('failure retrieving a list of subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.subCategories).toEqual([])
})

test('failure updating a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.subCategory).toEqual(INITIAL_STATE.subCategory)
})
test('failure searching a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategorySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.subCategories).toEqual([])
})
test('failure deleting a subCategory', () => {
  const state = reducer(INITIAL_STATE, Actions.subCategoryDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.subCategory).toEqual(INITIAL_STATE.subCategory)
})
