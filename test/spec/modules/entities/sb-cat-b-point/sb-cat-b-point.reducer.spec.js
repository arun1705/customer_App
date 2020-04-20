import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sb-cat-b-point/sb-cat-b-point.reducer'

test('attempt retrieving a single sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.sbCatBPoint).toBe(null)
})

test('attempt retrieving a list of sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.sbCatBPoints).toEqual([])
})

test('attempt updating a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.sbCatBPoint).toEqual({ id: 1 })
})

test('success retrieving a list of sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.sbCatBPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.sbCatBPoint).toEqual({ id: 1 })
})
test('success searching a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.sbCatBPoints).toEqual({ id: 1 })
})
test('success deleting a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.sbCatBPoint).toEqual(null)
})

test('failure retrieving a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.sbCatBPoint).toEqual(null)
})

test('failure retrieving a list of sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.sbCatBPoints).toEqual([])
})

test('failure updating a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.sbCatBPoint).toEqual(INITIAL_STATE.sbCatBPoint)
})
test('failure searching a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.sbCatBPoints).toEqual([])
})
test('failure deleting a sbCatBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.sbCatBPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.sbCatBPoint).toEqual(INITIAL_STATE.sbCatBPoint)
})
