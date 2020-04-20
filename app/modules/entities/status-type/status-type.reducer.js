import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  statusTypeRequest: ['statusTypeId'],
  statusTypeAllRequest: ['options'],
  statusTypeUpdateRequest: ['statusType'],
  statusTypeSearchRequest: ['query'],
  statusTypeDeleteRequest: ['statusTypeId'],

  statusTypeSuccess: ['statusType'],
  statusTypeAllSuccess: ['statusTypes'],
  statusTypeUpdateSuccess: ['statusType'],
  statusTypeSearchSuccess: ['statusTypes'],
  statusTypeDeleteSuccess: [],

  statusTypeFailure: ['error'],
  statusTypeAllFailure: ['error'],
  statusTypeUpdateFailure: ['error'],
  statusTypeSearchFailure: ['error'],
  statusTypeDeleteFailure: ['error'],
})

export const StatusTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  statusType: null,
  statusTypes: [],
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
    statusType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    statusTypes: [],
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
  const { statusType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    statusType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { statusTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    statusTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { statusType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    statusType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { statusTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    statusTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    statusType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    statusType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    statusTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    statusType: state.statusType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    statusType: state.statusType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    statusTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STATUS_TYPE_REQUEST]: request,
  [Types.STATUS_TYPE_ALL_REQUEST]: allRequest,
  [Types.STATUS_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.STATUS_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.STATUS_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.STATUS_TYPE_SUCCESS]: success,
  [Types.STATUS_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.STATUS_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.STATUS_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.STATUS_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.STATUS_TYPE_FAILURE]: failure,
  [Types.STATUS_TYPE_ALL_FAILURE]: allFailure,
  [Types.STATUS_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.STATUS_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.STATUS_TYPE_DELETE_FAILURE]: deleteFailure,
})
