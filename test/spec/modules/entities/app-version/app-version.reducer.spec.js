import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/app-version/app-version.reducer'

test('attempt retrieving a single appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.appVersion).toBe(null)
})

test('attempt retrieving a list of appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.appVersions).toEqual([])
})

test('attempt updating a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.appVersion).toEqual({ id: 1 })
})

test('success retrieving a list of appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.appVersions).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.appVersion).toEqual({ id: 1 })
})
test('success searching a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.appVersions).toEqual({ id: 1 })
})
test('success deleting a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.appVersion).toEqual(null)
})

test('failure retrieving a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.appVersion).toEqual(null)
})

test('failure retrieving a list of appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.appVersions).toEqual([])
})

test('failure updating a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.appVersion).toEqual(INITIAL_STATE.appVersion)
})
test('failure searching a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.appVersions).toEqual([])
})
test('failure deleting a appVersion', () => {
  const state = reducer(INITIAL_STATE, Actions.appVersionDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.appVersion).toEqual(INITIAL_STATE.appVersion)
})
