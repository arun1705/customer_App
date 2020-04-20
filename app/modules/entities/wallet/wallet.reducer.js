import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  walletRequest: ['walletId'],
  walletAllRequest: ['options'],
  walletWithdrawRequest: ['options'],
  walletUpdateRequest: ['options'],
  walletSearchRequest: ['query'],
  walletDeleteRequest: ['walletId'],

  walletSuccess: ['wallet'],
  walletWithdrawSuccess: ['wallet'],
  walletAllSuccess: ['wallets'],
  walletUpdateSuccess: ['wallet'],
  walletSearchSuccess: ['wallets'],
  walletDeleteSuccess: [],

  walletFailure: ['error'],
  walletWithdrawFailure: ['error'],
  walletAllFailure: ['error'],
  walletUpdateFailure: ['error'],
  walletSearchFailure: ['error'],
  walletDeleteFailure: ['error'],
})

export const WalletTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  wallet: null,
  wallets: [],
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorSearching: null,
  errorDeleting: null,
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({
    fetchingOne: true,
    wallet: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    wallets: [],
  })

export const withdrawRequest = state =>
  state.merge({
    updating: true,
  })

// request to update from an api
export const updateRequest = state =>
  state.merge({
    updating: true,
  })
// request to search from an api
export const searchRequest = state =>
  state.merge({
    searching: true,
  })
// request to delete from an api
export const deleteRequest = state =>
  state.merge({
    deleting: true,
  })

// successful api lookup for single entity
export const success = (state, action) => {
  const { wallet } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    wallet,
  })
}

export const withdrawSuccess = (state, action) => {
  const { wallet } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    wallet,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { wallets } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    wallets,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { wallet } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    wallet,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { wallets } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    wallets,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    wallet: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    wallet: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    wallets: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    wallet: state.wallet,
  })
}

export const withdrawFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    wallet: state.wallet,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    wallet: state.wallet,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    wallets: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WALLET_REQUEST]: request,
  [Types.WALLET_ALL_REQUEST]: allRequest,
  [Types.WALLET_WITHDRAW_REQUEST]: withdrawRequest,
  [Types.WALLET_UPDATE_REQUEST]: updateRequest,
  [Types.WALLET_SEARCH_REQUEST]: searchRequest,
  [Types.WALLET_DELETE_REQUEST]: deleteRequest,

  [Types.WALLET_SUCCESS]: success,
  [Types.WALLET_ALL_SUCCESS]: allSuccess,
  [Types.WALLET_WITHDRAW_SUCCESS]: withdrawSuccess,
  [Types.WALLET_UPDATE_SUCCESS]: updateSuccess,
  [Types.WALLET_SEARCH_SUCCESS]: searchSuccess,
  [Types.WALLET_DELETE_SUCCESS]: deleteSuccess,

  [Types.WALLET_FAILURE]: failure,
  [Types.WALLET_ALL_FAILURE]: allFailure,
  [Types.WALLET_WITHDRAW_FAILURE]: withdrawFailure,
  [Types.WALLET_UPDATE_FAILURE]: updateFailure,
  [Types.WALLET_SEARCH_FAILURE]: searchFailure,
  [Types.WALLET_DELETE_FAILURE]: deleteFailure,
})
