import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  appVersionRequest: ['appVersionId'],
  appVersionAllRequest: ['options'],
  appVersionUpdateRequest: ['appVersion'],
  appVersionSearchRequest: ['query'],
  appVersionDeleteRequest: ['appVersionId'],

  appVersionSuccess: ['appVersion'],
  appVersionAllSuccess: ['appVersions'],
  appVersionUpdateSuccess: ['appVersion'],
  appVersionSearchSuccess: ['appVersions'],
  appVersionDeleteSuccess: [],

  appVersionFailure: ['error'],
  appVersionAllFailure: ['error'],
  appVersionUpdateFailure: ['error'],
  appVersionSearchFailure: ['error'],
  appVersionDeleteFailure: ['error'],
})

export const AppVersionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  appVersion: null,
  appVersions: [],
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
    appVersion: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    appVersions: [],
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
  const { appVersion } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    appVersion,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { appVersions } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    appVersions,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { appVersion } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    appVersion,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { appVersions } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    appVersions,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    appVersion: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    appVersion: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    appVersions: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    appVersion: state.appVersion,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    appVersion: state.appVersion,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    appVersions: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APP_VERSION_REQUEST]: request,
  [Types.APP_VERSION_ALL_REQUEST]: allRequest,
  [Types.APP_VERSION_UPDATE_REQUEST]: updateRequest,
  [Types.APP_VERSION_SEARCH_REQUEST]: searchRequest,
  [Types.APP_VERSION_DELETE_REQUEST]: deleteRequest,

  [Types.APP_VERSION_SUCCESS]: success,
  [Types.APP_VERSION_ALL_SUCCESS]: allSuccess,
  [Types.APP_VERSION_UPDATE_SUCCESS]: updateSuccess,
  [Types.APP_VERSION_SEARCH_SUCCESS]: searchSuccess,
  [Types.APP_VERSION_DELETE_SUCCESS]: deleteSuccess,

  [Types.APP_VERSION_FAILURE]: failure,
  [Types.APP_VERSION_ALL_FAILURE]: allFailure,
  [Types.APP_VERSION_UPDATE_FAILURE]: updateFailure,
  [Types.APP_VERSION_SEARCH_FAILURE]: searchFailure,
  [Types.APP_VERSION_DELETE_FAILURE]: deleteFailure,
})
