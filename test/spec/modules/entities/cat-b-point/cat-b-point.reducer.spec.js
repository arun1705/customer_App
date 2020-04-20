import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/cat-b-point/cat-b-point.reducer'

test('attempt retrieving a single catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.catBPoint).toBe(null)
})

test('attempt retrieving a list of catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.catBPoints).toEqual([])
})

test('attempt updating a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.catBPoint).toEqual({ id: 1 })
})

test('success retrieving a list of catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.catBPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.catBPoint).toEqual({ id: 1 })
})
test('success searching a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.catBPoints).toEqual({ id: 1 })
})
test('success deleting a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.catBPoint).toEqual(null)
})

test('failure retrieving a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.catBPoint).toEqual(null)
})

test('failure retrieving a list of catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.catBPoints).toEqual([])
})

test('failure updating a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.catBPoint).toEqual(INITIAL_STATE.catBPoint)
})
test('failure searching a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.catBPoints).toEqual([])
})
test('failure deleting a catBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.catBPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.catBPoint).toEqual(INITIAL_STATE.catBPoint)
})
