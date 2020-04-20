import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sb-cat-point/sb-cat-point.reducer'

test('attempt retrieving a single sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.sbCatPoint).toBe(null)
})

test('attempt retrieving a list of sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.sbCatPoints).toEqual([])
})

test('attempt updating a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.sbCatPoint).toEqual({ id: 1 })
})

test('success retrieving a list of sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.sbCatPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.sbCatPoint).toEqual({ id: 1 })
})
test('success searching a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.sbCatPoints).toEqual({ id: 1 })
})
test('success deleting a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.sbCatPoint).toEqual(null)
})

test('failure retrieving a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.sbCatPoint).toEqual(null)
})

test('failure retrieving a list of sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.sbCatPoints).toEqual([])
})

test('failure updating a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.sbCatPoint).toEqual(INITIAL_STATE.sbCatPoint)
})
test('failure searching a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.sbCatPoints).toEqual([])
})
test('failure deleting a sbCatPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.sbCatPoint).toEqual(INITIAL_STATE.sbCatPoint)
})
