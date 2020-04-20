import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  statusRequest: ['statusId'],
  statusAllRequest: ['options'],
  statusUpdateRequest: ['status'],
  statusSearchRequest: ['query'],
  statusDeleteRequest: ['statusId'],

  statusSuccess: ['status'],
  statusAllSuccess: ['statuses'],
  statusUpdateSuccess: ['status'],
  statusSearchSuccess: ['statuses'],
  statusDeleteSuccess: [],

  statusFailure: ['error'],
  statusAllFailure: ['error'],
  statusUpdateFailure: ['error'],
  statusSearchFailure: ['error'],
  statusDeleteFailure: ['error'],
})

export const StatusTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  status: null,
  statuses: [],
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
    status: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    statuses: [],
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
  const { status } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    status,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { statuses } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    statuses,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { status } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    status,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { statuses } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    statuses,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    status: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    status: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    statuses: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    status: state.status,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    status: state.status,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    statuses: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STATUS_REQUEST]: request,
  [Types.STATUS_ALL_REQUEST]: allRequest,
  [Types.STATUS_UPDATE_REQUEST]: updateRequest,
  [Types.STATUS_SEARCH_REQUEST]: searchRequest,
  [Types.STATUS_DELETE_REQUEST]: deleteRequest,

  [Types.STATUS_SUCCESS]: success,
  [Types.STATUS_ALL_SUCCESS]: allSuccess,
  [Types.STATUS_UPDATE_SUCCESS]: updateSuccess,
  [Types.STATUS_SEARCH_SUCCESS]: searchSuccess,
  [Types.STATUS_DELETE_SUCCESS]: deleteSuccess,

  [Types.STATUS_FAILURE]: failure,
  [Types.STATUS_ALL_FAILURE]: allFailure,
  [Types.STATUS_UPDATE_FAILURE]: updateFailure,
  [Types.STATUS_SEARCH_FAILURE]: searchFailure,
  [Types.STATUS_DELETE_FAILURE]: deleteFailure,
})
