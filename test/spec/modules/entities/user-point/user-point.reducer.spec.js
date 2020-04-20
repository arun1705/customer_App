import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/user-point/user-point.reducer'

test('attempt retrieving a single userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.userPoint).toBe(null)
})

test('attempt retrieving a list of userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.userPoints).toEqual([])
})

test('attempt updating a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.userPoint).toEqual({ id: 1 })
})

test('success retrieving a list of userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.userPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.userPoint).toEqual({ id: 1 })
})
test('success searching a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.userPoints).toEqual({ id: 1 })
})
test('success deleting a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.userPoint).toEqual(null)
})

test('failure retrieving a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.userPoint).toEqual(null)
})

test('failure retrieving a list of userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.userPoints).toEqual([])
})

test('failure updating a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.userPoint).toEqual(INITIAL_STATE.userPoint)
})
test('failure searching a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.userPoints).toEqual([])
})
test('failure deleting a userPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.userPoint).toEqual(INITIAL_STATE.userPoint)
})
