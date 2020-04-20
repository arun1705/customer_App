import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/ord-dtl-trans/ord-dtl-trans.reducer'

test('attempt retrieving a single ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.ordDtlTran).toBe(null)
})

test('attempt retrieving a list of ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.ordDtlTrans).toEqual([])
})

test('attempt updating a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.ordDtlTran).toEqual({ id: 1 })
})

test('success retrieving a list of ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.ordDtlTrans).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.ordDtlTran).toEqual({ id: 1 })
})
test('success searching a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.ordDtlTrans).toEqual({ id: 1 })
})
test('success deleting a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.ordDtlTran).toEqual(null)
})

test('failure retrieving a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.ordDtlTran).toEqual(null)
})

test('failure retrieving a list of ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.ordDtlTrans).toEqual([])
})

test('failure updating a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.ordDtlTran).toEqual(INITIAL_STATE.ordDtlTran)
})
test('failure searching a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.ordDtlTrans).toEqual([])
})
test('failure deleting a ordDtlTran', () => {
  const state = reducer(INITIAL_STATE, Actions.ordDtlTranDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.ordDtlTran).toEqual(INITIAL_STATE.ordDtlTran)
})
