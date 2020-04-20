import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  emailTypeRequest: ['emailTypeId'],
  emailTypeAllRequest: ['options'],
  emailTypeUpdateRequest: ['emailType'],
  emailTypeSearchRequest: ['query'],
  emailTypeDeleteRequest: ['emailTypeId'],

  emailTypeSuccess: ['emailType'],
  emailTypeAllSuccess: ['emailTypes'],
  emailTypeUpdateSuccess: ['emailType'],
  emailTypeSearchSuccess: ['emailTypes'],
  emailTypeDeleteSuccess: [],

  emailTypeFailure: ['error'],
  emailTypeAllFailure: ['error'],
  emailTypeUpdateFailure: ['error'],
  emailTypeSearchFailure: ['error'],
  emailTypeDeleteFailure: ['error'],
})

export const EmailTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  emailType: null,
  emailTypes: [],
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
    emailType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    emailTypes: [],
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
  const { emailType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    emailType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { emailTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    emailTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { emailType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    emailType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { emailTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    emailTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    emailType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    emailType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    emailTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    emailType: state.emailType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    emailType: state.emailType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    emailTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMAIL_TYPE_REQUEST]: request,
  [Types.EMAIL_TYPE_ALL_REQUEST]: allRequest,
  [Types.EMAIL_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.EMAIL_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.EMAIL_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.EMAIL_TYPE_SUCCESS]: success,
  [Types.EMAIL_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.EMAIL_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.EMAIL_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.EMAIL_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.EMAIL_TYPE_FAILURE]: failure,
  [Types.EMAIL_TYPE_ALL_FAILURE]: allFailure,
  [Types.EMAIL_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.EMAIL_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.EMAIL_TYPE_DELETE_FAILURE]: deleteFailure,
})
