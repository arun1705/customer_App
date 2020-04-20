import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/wallet-tx/wallet-tx.reducer'

test('attempt retrieving a single walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.walletTx).toBe(null)
})

test('attempt retrieving a list of walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.walletTxes).toEqual([])
})

test('attempt updating a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.walletTx).toEqual({ id: 1 })
})

test('success retrieving a list of walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.walletTxes).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.walletTx).toEqual({ id: 1 })
})
test('success searching a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.walletTxes).toEqual({ id: 1 })
})
test('success deleting a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.walletTx).toEqual(null)
})

test('failure retrieving a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.walletTx).toEqual(null)
})

test('failure retrieving a list of walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.walletTxes).toEqual([])
})

test('failure updating a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.walletTx).toEqual(INITIAL_STATE.walletTx)
})
test('failure searching a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.walletTxes).toEqual([])
})
test('failure deleting a walletTx', () => {
  const state = reducer(INITIAL_STATE, Actions.walletTxDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.walletTx).toEqual(INITIAL_STATE.walletTx)
})
