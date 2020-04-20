import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sb-cat-type-b-point/sb-cat-type-b-point.reducer'

test('attempt retrieving a single sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.sbCatTypeBPoint).toBe(null)
})

test('attempt retrieving a list of sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.sbCatTypeBPoints).toEqual([])
})

test('attempt updating a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.sbCatTypeBPoint).toEqual({ id: 1 })
})

test('success retrieving a list of sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.sbCatTypeBPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.sbCatTypeBPoint).toEqual({ id: 1 })
})
test('success searching a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.sbCatTypeBPoints).toEqual({ id: 1 })
})
test('success deleting a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.sbCatTypeBPoint).toEqual(null)
})

test('failure retrieving a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.sbCatTypeBPoint).toEqual(null)
})

test('failure retrieving a list of sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.sbCatTypeBPoints).toEqual([])
})

test('failure updating a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.sbCatTypeBPoint).toEqual(INITIAL_STATE.sbCatTypeBPoint)
})
test('failure searching a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.sbCatTypeBPoints).toEqual([])
})
test('failure deleting a sbCatTypeBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypeBPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.sbCatTypeBPoint).toEqual(INITIAL_STATE.sbCatTypeBPoint)
})
