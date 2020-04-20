import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/ord-pick-up-trk/ord-pick-up-trk.reducer'

test('attempt retrieving a single ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.ordPickUpTrk).toBe(null)
})

test('attempt retrieving a list of ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.ordPickUpTrks).toEqual([])
})

test('attempt updating a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.ordPickUpTrk).toEqual({ id: 1 })
})

test('success retrieving a list of ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.ordPickUpTrks).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.ordPickUpTrk).toEqual({ id: 1 })
})
test('success searching a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.ordPickUpTrks).toEqual({ id: 1 })
})
test('success deleting a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.ordPickUpTrk).toEqual(null)
})

test('failure retrieving a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.ordPickUpTrk).toEqual(null)
})

test('failure retrieving a list of ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.ordPickUpTrks).toEqual([])
})

test('failure updating a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.ordPickUpTrk).toEqual(INITIAL_STATE.ordPickUpTrk)
})
test('failure searching a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.ordPickUpTrks).toEqual([])
})
test('failure deleting a ordPickUpTrk', () => {
  const state = reducer(INITIAL_STATE, Actions.ordPickUpTrkDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.ordPickUpTrk).toEqual(INITIAL_STATE.ordPickUpTrk)
})
