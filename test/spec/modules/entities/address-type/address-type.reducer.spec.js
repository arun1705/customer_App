import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/address-type/address-type.reducer'

test('attempt retrieving a single addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.addressType).toBe(null)
})

test('attempt retrieving a list of addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.addressTypes).toEqual([])
})

test('attempt updating a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.addressType).toEqual({ id: 1 })
})

test('success retrieving a list of addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.addressTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.addressType).toEqual({ id: 1 })
})
test('success searching a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.addressTypes).toEqual({ id: 1 })
})
test('success deleting a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.addressType).toEqual(null)
})

test('failure retrieving a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.addressType).toEqual(null)
})

test('failure retrieving a list of addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.addressTypes).toEqual([])
})

test('failure updating a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.addressType).toEqual(INITIAL_STATE.addressType)
})
test('failure searching a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.addressTypes).toEqual([])
})
test('failure deleting a addressType', () => {
  const state = reducer(INITIAL_STATE, Actions.addressTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.addressType).toEqual(INITIAL_STATE.addressType)
})
