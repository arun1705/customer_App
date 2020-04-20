import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  pincodeRequest: ['pincodeId'],
  pincodeAllRequest: ['id'],
  pincodeUpdateRequest: ['pincode'],
  pincodeSearchRequest: ['query'],
  pincodeDeleteRequest: ['pincodeId'],

  pincodeSuccess: ['pincode'],
  pincodeAllSuccess: ['pincodes'],
  pincodeUpdateSuccess: ['pincode'],
  pincodeSearchSuccess: ['pincodes'],
  pincodeDeleteSuccess: [],

  pincodeFailure: ['error'],
  pincodeAllFailure: ['error'],
  pincodeUpdateFailure: ['error'],
  pincodeSearchFailure: ['error'],
  pincodeDeleteFailure: ['error'],
})

export const PincodeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  pincode: null,
  pincodes: [],
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
    pincode: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    pincodes: [],
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
  const { pincode } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    pincode,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { pincodes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    pincodes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { pincode } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    pincode,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { pincodes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    pincodes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    pincode: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    pincode: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    pincodes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    pincode: state.pincode,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    pincode: state.pincode,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    pincodes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PINCODE_REQUEST]: request,
  [Types.PINCODE_ALL_REQUEST]: allRequest,
  [Types.PINCODE_UPDATE_REQUEST]: updateRequest,
  [Types.PINCODE_SEARCH_REQUEST]: searchRequest,
  [Types.PINCODE_DELETE_REQUEST]: deleteRequest,

  [Types.PINCODE_SUCCESS]: success,
  [Types.PINCODE_ALL_SUCCESS]: allSuccess,
  [Types.PINCODE_UPDATE_SUCCESS]: updateSuccess,
  [Types.PINCODE_SEARCH_SUCCESS]: searchSuccess,
  [Types.PINCODE_DELETE_SUCCESS]: deleteSuccess,

  [Types.PINCODE_FAILURE]: failure,
  [Types.PINCODE_ALL_FAILURE]: allFailure,
  [Types.PINCODE_UPDATE_FAILURE]: updateFailure,
  [Types.PINCODE_SEARCH_FAILURE]: searchFailure,
  [Types.PINCODE_DELETE_FAILURE]: deleteFailure,
})
