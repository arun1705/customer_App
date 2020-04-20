import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/currency/currency.reducer'

test('attempt retrieving a single currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.currency).toBe(null)
})

test('attempt retrieving a list of currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.currencies).toEqual([])
})

test('attempt updating a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.currency).toEqual({ id: 1 })
})

test('success retrieving a list of currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.currencies).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.currency).toEqual({ id: 1 })
})
test('success searching a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.currencies).toEqual({ id: 1 })
})
test('success deleting a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.currency).toEqual(null)
})

test('failure retrieving a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.currency).toEqual(null)
})

test('failure retrieving a list of currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.currencies).toEqual([])
})

test('failure updating a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.currency).toEqual(INITIAL_STATE.currency)
})
test('failure searching a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.currencies).toEqual([])
})
test('failure deleting a currency', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.currency).toEqual(INITIAL_STATE.currency)
})
