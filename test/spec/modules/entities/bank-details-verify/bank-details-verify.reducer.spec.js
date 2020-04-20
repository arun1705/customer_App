import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/bank-details-verify/bank-details-verify.reducer'

test('attempt retrieving a single bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.bankDetailsVerify).toBe(null)
})

test('attempt retrieving a list of bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.bankDetailsVerifies).toEqual([])
})

test('attempt updating a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.bankDetailsVerify).toEqual({ id: 1 })
})

test('success retrieving a list of bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.bankDetailsVerifies).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.bankDetailsVerify).toEqual({ id: 1 })
})
test('success searching a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.bankDetailsVerifies).toEqual({ id: 1 })
})
test('success deleting a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.bankDetailsVerify).toEqual(null)
})

test('failure retrieving a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.bankDetailsVerify).toEqual(null)
})

test('failure retrieving a list of bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.bankDetailsVerifies).toEqual([])
})

test('failure updating a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.bankDetailsVerify).toEqual(INITIAL_STATE.bankDetailsVerify)
})
test('failure searching a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.bankDetailsVerifies).toEqual([])
})
test('failure deleting a bankDetailsVerify', () => {
  const state = reducer(INITIAL_STATE, Actions.bankDetailsVerifyDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.bankDetailsVerify).toEqual(INITIAL_STATE.bankDetailsVerify)
})
