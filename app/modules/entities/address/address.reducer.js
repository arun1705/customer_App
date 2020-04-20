import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addressRequest: ['addressId'],
  addressAllRequest: ['userId'],
  addressUpdateRequest: ['address'],
  addressSearchRequest: ['query'],
  addressDeleteRequest: ['addressId'],

  addressSuccess: ['address'],
  addressAllSuccess: ['addresses'],
  addressUpdateSuccess: ['address'],
  addressSearchSuccess: ['addresses'],
  addressDeleteSuccess: [],

  addressFailure: ['error'],
  addressAllFailure: ['error'],
  addressUpdateFailure: ['error'],
  addressSearchFailure: ['error'],
  addressDeleteFailure: ['error'],
})

export const AddressTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  address: null,
  addresses: [],
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
    address: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    addresses: [],
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
  const { address } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    address,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { addresses } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    addresses,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { address } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    address,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { addresses } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    addresses,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    address: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    address: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    addresses: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    address: state.address,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    address: state.address,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    addresses: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADDRESS_REQUEST]: request,
  [Types.ADDRESS_ALL_REQUEST]: allRequest,
  [Types.ADDRESS_UPDATE_REQUEST]: updateRequest,
  [Types.ADDRESS_SEARCH_REQUEST]: searchRequest,
  [Types.ADDRESS_DELETE_REQUEST]: deleteRequest,

  [Types.ADDRESS_SUCCESS]: success,
  [Types.ADDRESS_ALL_SUCCESS]: allSuccess,
  [Types.ADDRESS_UPDATE_SUCCESS]: updateSuccess,
  [Types.ADDRESS_SEARCH_SUCCESS]: searchSuccess,
  [Types.ADDRESS_DELETE_SUCCESS]: deleteSuccess,

  [Types.ADDRESS_FAILURE]: failure,
  [Types.ADDRESS_ALL_FAILURE]: allFailure,
  [Types.ADDRESS_UPDATE_FAILURE]: updateFailure,
  [Types.ADDRESS_SEARCH_FAILURE]: searchFailure,
  [Types.ADDRESS_DELETE_FAILURE]: deleteFailure,
})
