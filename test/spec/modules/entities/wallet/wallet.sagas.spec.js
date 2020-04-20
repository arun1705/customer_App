import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import { getWallet, getWallets, updateWallet, deleteWallet, searchWallets } from '../../../../../app/modules/entities/wallet/wallet.sagas'
import WalletActions from '../../../../../app/modules/entities/wallet/wallet.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getWallet(1)
  const step = stepper(getWallet(FixtureAPI, { walletId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletActions.walletSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getWallet(FixtureAPI, { walletId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletActions.walletFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getWallets()
  const step = stepper(getWallets(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletActions.walletAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getWallets(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletActions.walletAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateWallet({ id: 1 })
  const step = stepper(updateWallet(FixtureAPI, { wallet: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletActions.walletUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateWallet(FixtureAPI, { wallet: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletActions.walletUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchWallets()
  const step = stepper(searchWallets(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletActions.walletSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchWallets(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletActions.walletSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteWallet({ id: 1 })
  const step = stepper(deleteWallet(FixtureAPI, { walletId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletActions.walletDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteWallet(FixtureAPI, { walletId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletActions.walletDeleteFailure()))
})
