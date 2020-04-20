import Actions, { reducer, INITIAL_STATE } from '../../../../../app/modules/entities/wallet/wallet.reducer'

test('attempt retrieving a single wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletRequest({ id: 1 }))

  expect(state.fetchingOne).toBe(true)
  expect(state.wallet).toBe(null)
})

test('attempt retrieving a list of wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletAllRequest({ id: 1 }))

  expect(state.fetchingAll).toBe(true)
  expect(state.wallets).toEqual([])
})

test('attempt updating a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletUpdateRequest({ id: 1 }))

  expect(state.updating).toBe(true)
})
test('attempt searching a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletDeleteRequest({ id: 1 }))

  expect(state.deleting).toBe(true)
})

test('success retrieving a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletSuccess({ id: 1 }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.wallet).toEqual({ id: 1 })
})

test('success retrieving a list of wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletAllSuccess([{ id: 1 }, { id: 2 }]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.wallets).toEqual([{ id: 1 }, { id: 2 }])
})

test('success updating a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletUpdateSuccess({ id: 1 }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.wallet).toEqual({ id: 1 })
})
test('success searching a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletSearchSuccess({ id: 1 }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.wallets).toEqual({ id: 1 })
})
test('success deleting a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.wallet).toEqual(null)
})

test('failure retrieving a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletFailure({ error: 'Not found' }))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({ error: 'Not found' })
  expect(state.wallet).toEqual(null)
})

test('failure retrieving a list of wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletAllFailure({ error: 'Not found' }))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({ error: 'Not found' })
  expect(state.wallets).toEqual([])
})

test('failure updating a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletUpdateFailure({ error: 'Not found' }))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({ error: 'Not found' })
  expect(state.wallet).toEqual(INITIAL_STATE.wallet)
})
test('failure searching a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletSearchFailure({ error: 'Not found' }))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({ error: 'Not found' })
  expect(state.wallets).toEqual([])
})
test('failure deleting a wallet', () => {
  const state = reducer(INITIAL_STATE, Actions.walletDeleteFailure({ error: 'Not found' }))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({ error: 'Not found' })
  expect(state.wallet).toEqual(INITIAL_STATE.wallet)
})
