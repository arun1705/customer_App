import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/email-type/email-type.reducer'

test('attempt retrieving a single emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.emailType).toBe(null)
})

test('attempt retrieving a list of emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.emailTypes).toEqual([])
})

test('attempt updating a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.emailType).toEqual({ id: 1 })
})

test('success retrieving a list of emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.emailTypes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.emailType).toEqual({ id: 1 })
})
test('success searching a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.emailTypes).toEqual({ id: 1 })
})
test('success deleting a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.emailType).toEqual(null)
})

test('failure retrieving a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.emailType).toEqual(null)
})

test('failure retrieving a list of emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.emailTypes).toEqual([])
})

test('failure updating a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.emailType).toEqual(INITIAL_STATE.emailType)
})
test('failure searching a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.emailTypes).toEqual([])
})
test('failure deleting a emailType', () => {
  const state = reducer(INITIAL_STATE, Actions.emailTypeDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.emailType).toEqual(INITIAL_STATE.emailType)
})
