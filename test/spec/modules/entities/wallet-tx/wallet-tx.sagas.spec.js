import { put } from 'redux-saga/effects'

import FixtureAPI from '../../../../../app/shared/services/fixture-api'
import {
  getWalletTx,
  getWalletTxes,
  updateWalletTx,
  deleteWalletTx,
  searchWalletTxes,
} from '../../../../../app/modules/entities/wallet-tx/wallet-tx.sagas'
import WalletTxActions from '../../../../../app/modules/entities/wallet-tx/wallet-tx.reducer'

const stepper = fn => mock => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getWalletTx(1)
  const step = stepper(getWalletTx(FixtureAPI, { walletTxId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletTxActions.walletTxSuccess({ id: 1 })))
})

test('get failure path', () => {
  const response = { ok: false }
  const step = stepper(getWalletTx(FixtureAPI, { walletTxId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletTxActions.walletTxFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getWalletTxes()
  const step = stepper(getWalletTxes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletTxActions.walletTxAllSuccess([{ id: 1 }, { id: 2 }])))
})

test('getAll failure path', () => {
  const response = { ok: false }
  const step = stepper(getWalletTxes(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletTxActions.walletTxAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateWalletTx({ id: 1 })
  const step = stepper(updateWalletTx(FixtureAPI, { walletTx: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletTxActions.walletTxUpdateSuccess({ id: 1 })))
})

test('update failure path', () => {
  const response = { ok: false }
  const step = stepper(updateWalletTx(FixtureAPI, { walletTx: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletTxActions.walletTxUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchWalletTxes()
  const step = stepper(searchWalletTxes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletTxActions.walletTxSearchSuccess([{ id: 1 }, { id: 2 }])))
})

test('search failure path', () => {
  const response = { ok: false }
  const step = stepper(searchWalletTxes(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletTxActions.walletTxSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteWalletTx({ id: 1 })
  const step = stepper(deleteWalletTx(FixtureAPI, { walletTxId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(WalletTxActions.walletTxDeleteSuccess({ id: 1 })))
})

test('delete failure path', () => {
  const response = { ok: false }
  const step = stepper(deleteWalletTx(FixtureAPI, { walletTxId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(WalletTxActions.walletTxDeleteFailure()))
})
