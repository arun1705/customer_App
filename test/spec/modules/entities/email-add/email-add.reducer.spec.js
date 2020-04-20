import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/email-add/email-add.reducer'

test('attempt retrieving a single emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.emailAdd).toBe(null)
})

test('attempt retrieving a list of emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.emailAdds).toEqual([])
})

test('attempt updating a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.emailAdd).toEqual({ id: 1 })
})

test('success retrieving a list of emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.emailAdds).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.emailAdd).toEqual({ id: 1 })
})
test('success searching a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.emailAdds).toEqual({ id: 1 })
})
test('success deleting a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.emailAdd).toEqual(null)
})

test('failure retrieving a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.emailAdd).toEqual(null)
})

test('failure retrieving a list of emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.emailAdds).toEqual([])
})

test('failure updating a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.emailAdd).toEqual(INITIAL_STATE.emailAdd)
})
test('failure searching a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.emailAdds).toEqual([])
})
test('failure deleting a emailAdd', () => {
  const state = reducer(INITIAL_STATE, Actions.emailAddDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.emailAdd).toEqual(INITIAL_STATE.emailAdd)
})
