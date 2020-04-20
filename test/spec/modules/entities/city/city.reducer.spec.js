import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/city/city.reducer'

test('attempt retrieving a single city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.city).toBe(null)
})

test('attempt retrieving a list of city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.cities).toEqual([])
})

test('attempt updating a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a city', () => {
  const state = reducer(INITIAL_STATE, Actions.citySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a city', () => {
  const state = reducer(INITIAL_STATE, Actions.citySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.city).toEqual({ id: 1 })
})

test('success retrieving a list of city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.cities).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.city).toEqual({ id: 1 })
})
test('success searching a city', () => {
  const state = reducer(INITIAL_STATE, Actions.citySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.cities).toEqual({ id: 1 })
})
test('success deleting a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.city).toEqual(null)
})

test('failure retrieving a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.city).toEqual(null)
})

test('failure retrieving a list of city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.cities).toEqual([])
})

test('failure updating a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.city).toEqual(INITIAL_STATE.city)
})
test('failure searching a city', () => {
  const state = reducer(INITIAL_STATE, Actions.citySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.cities).toEqual([])
})
test('failure deleting a city', () => {
  const state = reducer(INITIAL_STATE, Actions.cityDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.city).toEqual(INITIAL_STATE.city)
})
