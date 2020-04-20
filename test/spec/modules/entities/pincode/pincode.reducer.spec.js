import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/pincode/pincode.reducer'

test('attempt retrieving a single pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.pincode).toBe(null)
})

test('attempt retrieving a list of pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.pincodes).toEqual([])
})

test('attempt updating a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.pincode).toEqual({ id: 1 })
})

test('success retrieving a list of pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.pincodes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.pincode).toEqual({ id: 1 })
})
test('success searching a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.pincodes).toEqual({ id: 1 })
})
test('success deleting a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.pincode).toEqual(null)
})

test('failure retrieving a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.pincode).toEqual(null)
})

test('failure retrieving a list of pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.pincodes).toEqual([])
})

test('failure updating a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.pincode).toEqual(INITIAL_STATE.pincode)
})
test('failure searching a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.pincodes).toEqual([])
})
test('failure deleting a pincode', () => {
  const state = reducer(INITIAL_STATE, Actions.pincodeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.pincode).toEqual(INITIAL_STATE.pincode)
})
