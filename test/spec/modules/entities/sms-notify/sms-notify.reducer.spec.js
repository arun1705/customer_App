import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/sms-notify/sms-notify.reducer'

test('attempt retrieving a single smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.smsNotify).toBe(null)
})

test('attempt retrieving a list of smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.smsNotifies).toEqual([])
})

test('attempt updating a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifySearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifySuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.smsNotify).toEqual({ id: 1 })
})

test('success retrieving a list of smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.smsNotifies).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.smsNotify).toEqual({ id: 1 })
})
test('success searching a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifySearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.smsNotifies).toEqual({ id: 1 })
})
test('success deleting a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.smsNotify).toEqual(null)
})

test('failure retrieving a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.smsNotify).toEqual(null)
})

test('failure retrieving a list of smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.smsNotifies).toEqual([])
})

test('failure updating a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.smsNotify).toEqual(INITIAL_STATE.smsNotify)
})
test('failure searching a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifySearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.smsNotifies).toEqual([])
})
test('failure deleting a smsNotify', () => {
  const state = reducer(INITIAL_STATE, Actions.smsNotifyDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.smsNotify).toEqual(INITIAL_STATE.smsNotify)
})
