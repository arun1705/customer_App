import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/pancard-verify/pancard-verify.reducer'

test('attempt retrieving a single pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.pancardVerify).toBe(null)
})

test('attempt retrieving a list of pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.pancardVerifies).toEqual([])
})

test('attempt updating a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.pancardVerify).toEqual({ id: 1 })
})

test('success retrieving a list of pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.pancardVerifies).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.pancardVerify).toEqual({ id: 1 })
})
test('success searching a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.pancardVerifies).toEqual({ id: 1 })
})
test('success deleting a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.pancardVerify).toEqual(null)
})

test('failure retrieving a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.pancardVerify).toEqual(null)
})

test('failure retrieving a list of pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.pancardVerifies).toEqual([])
})

test('failure updating a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.pancardVerify).toEqual(INITIAL_STATE.pancardVerify)
})
test('failure searching a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.pancardVerifies).toEqual([])
})
test('failure deleting a pancardVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.pancardVerifyDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.pancardVerify).toEqual(INITIAL_STATE.pancardVerify)
})
