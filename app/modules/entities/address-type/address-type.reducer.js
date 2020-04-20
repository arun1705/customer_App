import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addressTypeRequest: ['addressTypeId'],
  addressTypeAllRequest: ['options'],
  addressTypeUpdateRequest: ['addressType'],
  addressTypeSearchRequest: ['query'],
  addressTypeDeleteRequest: ['addressTypeId'],

  addressTypeSuccess: ['addressType'],
  addressTypeAllSuccess: ['addressTypes'],
  addressTypeUpdateSuccess: ['addressType'],
  addressTypeSearchSuccess: ['addressTypes'],
  addressTypeDeleteSuccess: [],

  addressTypeFailure: ['error'],
  addressTypeAllFailure: ['error'],
  addressTypeUpdateFailure: ['error'],
  addressTypeSearchFailure: ['error'],
  addressTypeDeleteFailure: ['error'],
})

export const AddressTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  addressType: null,
  addressTypes: [],
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
    addressType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    addressTypes: [],
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
  const { addressType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    addressType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { addressTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    addressTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { addressType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    addressType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { addressTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    addressTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    addressType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    addressType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    addressTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    addressType: state.addressType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    addressType: state.addressType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    addressTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADDRESS_TYPE_REQUEST]: request,
  [Types.ADDRESS_TYPE_ALL_REQUEST]: allRequest,
  [Types.ADDRESS_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.ADDRESS_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.ADDRESS_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.ADDRESS_TYPE_SUCCESS]: success,
  [Types.ADDRESS_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.ADDRESS_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.ADDRESS_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.ADDRESS_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.ADDRESS_TYPE_FAILURE]: failure,
  [Types.ADDRESS_TYPE_ALL_FAILURE]: allFailure,
  [Types.ADDRESS_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.ADDRESS_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.ADDRESS_TYPE_DELETE_FAILURE]: deleteFailure,
})
