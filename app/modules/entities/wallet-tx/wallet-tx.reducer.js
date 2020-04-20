import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  walletTxRequest: ['walletTxId'],
  walletTxAllRequest: ['options'],
  walletTxUpdateRequest: ['walletTx'],
  walletTxSearchRequest: ['query'],
  walletTxDeleteRequest: ['walletTxId'],

  walletTxSuccess: ['walletTx'],
  walletTxAllSuccess: ['walletTxes'],
  walletTxUpdateSuccess: ['walletTx'],
  walletTxSearchSuccess: ['walletTxes'],
  walletTxDeleteSuccess: [],

  walletTxFailure: ['error'],
  walletTxAllFailure: ['error'],
  walletTxUpdateFailure: ['error'],
  walletTxSearchFailure: ['error'],
  walletTxDeleteFailure: ['error'],
})

export const WalletTxTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  walletTx: null,
  walletTxes: [],
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
    walletTx: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    walletTxes: [],
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
  const { walletTx } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    walletTx,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { walletTxes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    walletTxes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { walletTx } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    walletTx,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { walletTxes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    walletTxes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    walletTx: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    walletTx: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    walletTxes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    walletTx: state.walletTx,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    walletTx: state.walletTx,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    walletTxes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WALLET_TX_REQUEST]: request,
  [Types.WALLET_TX_ALL_REQUEST]: allRequest,
  [Types.WALLET_TX_UPDATE_REQUEST]: updateRequest,
  [Types.WALLET_TX_SEARCH_REQUEST]: searchRequest,
  [Types.WALLET_TX_DELETE_REQUEST]: deleteRequest,

  [Types.WALLET_TX_SUCCESS]: success,
  [Types.WALLET_TX_ALL_SUCCESS]: allSuccess,
  [Types.WALLET_TX_UPDATE_SUCCESS]: updateSuccess,
  [Types.WALLET_TX_SEARCH_SUCCESS]: searchSuccess,
  [Types.WALLET_TX_DELETE_SUCCESS]: deleteSuccess,

  [Types.WALLET_TX_FAILURE]: failure,
  [Types.WALLET_TX_ALL_FAILURE]: allFailure,
  [Types.WALLET_TX_UPDATE_FAILURE]: updateFailure,
  [Types.WALLET_TX_SEARCH_FAILURE]: searchFailure,
  [Types.WALLET_TX_DELETE_FAILURE]: deleteFailure,
})
