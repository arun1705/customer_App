import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/currency-b-point/currency-b-point.reducer'

test('attempt retrieving a single currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.currencyBPoint).toBe(null)
})

test('attempt retrieving a list of currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.currencyBPoints).toEqual([])
})

test('attempt updating a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.currencyBPoint).toEqual({ id: 1 })
})

test('success retrieving a list of currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.currencyBPoints).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.currencyBPoint).toEqual({ id: 1 })
})
test('success searching a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.currencyBPoints).toEqual({ id: 1 })
})
test('success deleting a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.currencyBPoint).toEqual(null)
})

test('failure retrieving a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.currencyBPoint).toEqual(null)
})

test('failure retrieving a list of currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.currencyBPoints).toEqual([])
})

test('failure updating a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.currencyBPoint).toEqual(INITIAL_STATE.currencyBPoint)
})
test('failure searching a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.currencyBPoints).toEqual([])
})
test('failure deleting a currencyBPoint', () => {
  const state = reducer(INITIAL_STATE, Actions.currencyBPointDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.currencyBPoint).toEqual(INITIAL_STATE.currencyBPoint)
})
