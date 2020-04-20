import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/address/address.reducer'

test('attempt retrieving a single address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.address).toBe(null)
})

test('attempt retrieving a list of address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.addresses).toEqual([])
})

test('attempt updating a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.address).toEqual({ id: 1 })
})

test('success retrieving a list of address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.addresses).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.address).toEqual({ id: 1 })
})
test('success searching a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.addresses).toEqual({ id: 1 })
})
test('success deleting a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.address).toEqual(null)
})

test('failure retrieving a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.address).toEqual(null)
})

test('failure retrieving a list of address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.addresses).toEqual([])
})

test('failure updating a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.address).toEqual(INITIAL_STATE.address)
})
test('failure searching a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.addresses).toEqual([])
})
test('failure deleting a address', () => {
  const state = reducer(INITIAL_STATE, Actions.addressDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.address).toEqual(INITIAL_STATE.address)
})
