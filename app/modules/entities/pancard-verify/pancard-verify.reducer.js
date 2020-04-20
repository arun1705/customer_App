import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  pancardVerifyRequest: ['pancardVerifyId'],
  pancardVerifyAllRequest: ['options'],
  pancardVerifyUpdateRequest: ['pancardVerify'],
  pancardVerifySearchRequest: ['query'],
  pancardVerifyDeleteRequest: ['pancardVerifyId'],

  pancardVerifySuccess: ['pancardVerify'],
  pancardVerifyAllSuccess: ['pancardVerifies'],
  pancardVerifyUpdateSuccess: ['pancardVerify'],
  pancardVerifySearchSuccess: ['pancardVerifies'],
  pancardVerifyDeleteSuccess: [],

  pancardVerifyFailure: ['error'],
  pancardVerifyAllFailure: ['error'],
  pancardVerifyUpdateFailure: ['error'],
  pancardVerifySearchFailure: ['error'],
  pancardVerifyDeleteFailure: ['error'],
})

export const PancardVerifyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  pancardVerify: null,
  pancardVerifies: [],
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
    pancardVerify: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    pancardVerifies: [],
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
  const { pancardVerify } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    pancardVerify,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { pancardVerifies } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    pancardVerifies,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { pancardVerify } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    pancardVerify,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { pancardVerifies } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    pancardVerifies,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    pancardVerify: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    pancardVerify: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    pancardVerifies: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    pancardVerify: state.pancardVerify,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    pancardVerify: state.pancardVerify,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    pancardVerifies: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PANCARD_VERIFY_REQUEST]: request,
  [Types.PANCARD_VERIFY_ALL_REQUEST]: allRequest,
  [Types.PANCARD_VERIFY_UPDATE_REQUEST]: updateRequest,
  [Types.PANCARD_VERIFY_SEARCH_REQUEST]: searchRequest,
  [Types.PANCARD_VERIFY_DELETE_REQUEST]: deleteRequest,

  [Types.PANCARD_VERIFY_SUCCESS]: success,
  [Types.PANCARD_VERIFY_ALL_SUCCESS]: allSuccess,
  [Types.PANCARD_VERIFY_UPDATE_SUCCESS]: updateSuccess,
  [Types.PANCARD_VERIFY_SEARCH_SUCCESS]: searchSuccess,
  [Types.PANCARD_VERIFY_DELETE_SUCCESS]: deleteSuccess,

  [Types.PANCARD_VERIFY_FAILURE]: failure,
  [Types.PANCARD_VERIFY_ALL_FAILURE]: allFailure,
  [Types.PANCARD_VERIFY_UPDATE_FAILURE]: updateFailure,
  [Types.PANCARD_VERIFY_SEARCH_FAILURE]: searchFailure,
  [Types.PANCARD_VERIFY_DELETE_FAILURE]: deleteFailure,
})
