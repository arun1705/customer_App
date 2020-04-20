import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/user-point-trans/user-point-trans.reducer'

test('attempt retrieving a single userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.userPointTran).toBe(null)
})

test('attempt retrieving a list of userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.userPointTrans).toEqual([])
})

test('attempt updating a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.userPointTran).toEqual({ id: 1 })
})

test('success retrieving a list of userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.userPointTrans).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.userPointTran).toEqual({ id: 1 })
})
test('success searching a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.userPointTrans).toEqual({ id: 1 })
})
test('success deleting a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.userPointTran).toEqual(null)
})

test('failure retrieving a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.userPointTran).toEqual(null)
})

test('failure retrieving a list of userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.userPointTrans).toEqual([])
})

test('failure updating a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.userPointTran).toEqual(INITIAL_STATE.userPointTran)
})
test('failure searching a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.userPointTrans).toEqual([])
})
test('failure deleting a userPointTran', () => {
  const state = reducer(INITIAL_STATE, Actions.userPointTranDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.userPointTran).toEqual(INITIAL_STATE.userPointTran)
})
