import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sb-cat-type-point/sb-cat-type-point.reducer'

test('attempt retrieving a single sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.sbCatTypePoint).toBe(null)
})

test('attempt retrieving a list of sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.sbCatTypePoints).toEqual([])
})

test('attempt updating a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.sbCatTypePoint).toEqual({ id: 1 })
})

test('success retrieving a list of sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.sbCatTypePoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.sbCatTypePoint).toEqual({ id: 1 })
})
test('success searching a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.sbCatTypePoints).toEqual({ id: 1 })
})
test('success deleting a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.sbCatTypePoint).toEqual(null)
})

test('failure retrieving a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.sbCatTypePoint).toEqual(null)
})

test('failure retrieving a list of sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.sbCatTypePoints).toEqual([])
})

test('failure updating a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.sbCatTypePoint).toEqual(INITIAL_STATE.sbCatTypePoint)
})
test('failure searching a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.sbCatTypePoints).toEqual([])
})
test('failure deleting a sbCatTypePoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatTypePointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.sbCatTypePoint).toEqual(INITIAL_STATE.sbCatTypePoint)
})
