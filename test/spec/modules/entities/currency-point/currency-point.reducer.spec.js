import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/currency-point/currency-point.reducer'

test('attempt retrieving a single currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.currencyPoint).toBe(null)
})

test('attempt retrieving a list of currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.currencyPoints).toEqual([])
})

test('attempt updating a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.currencyPoint).toEqual({ id: 1 })
})

test('success retrieving a list of currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.currencyPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.currencyPoint).toEqual({ id: 1 })
})
test('success searching a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.currencyPoints).toEqual({ id: 1 })
})
test('success deleting a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.currencyPoint).toEqual(null)
})

test('failure retrieving a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.currencyPoint).toEqual(null)
})

test('failure retrieving a list of currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.currencyPoints).toEqual([])
})

test('failure updating a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.currencyPoint).toEqual(INITIAL_STATE.currencyPoint)
})
test('failure searching a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.currencyPoints).toEqual([])
})
test('failure deleting a currencyPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.currencyPoint).toEqual(INITIAL_STATE.currencyPoint)
})
