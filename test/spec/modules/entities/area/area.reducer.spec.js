import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/area/area.reducer'

test('attempt retrieving a single area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.area).toBe(null)
})

test('attempt retrieving a list of area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.areas).toEqual([])
})

test('attempt updating a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.area).toEqual({ id: 1 })
})

test('success retrieving a list of area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.areas).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.area).toEqual({ id: 1 })
})
test('success searching a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.areas).toEqual({ id: 1 })
})
test('success deleting a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.area).toEqual(null)
})

test('failure retrieving a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.area).toEqual(null)
})

test('failure retrieving a list of area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.areas).toEqual([])
})

test('failure updating a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.area).toEqual(INITIAL_STATE.area)
})
test('failure searching a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.areas).toEqual([])
})
test('failure deleting a area', () => {
  const state = reducer(INITIAL_STATE, Actions.areaDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.area).toEqual(INITIAL_STATE.area)
})
