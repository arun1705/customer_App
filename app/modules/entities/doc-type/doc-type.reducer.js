import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  docTypeRequest: ['docTypeId'],
  docTypeAllRequest: ['options'],
  docTypeUpdateRequest: ['docType'],
  docTypeSearchRequest: ['query'],
  docTypeDeleteRequest: ['docTypeId'],

  docTypeSuccess: ['docType'],
  docTypeAllSuccess: ['docTypes'],
  docTypeUpdateSuccess: ['docType'],
  docTypeSearchSuccess: ['docTypes'],
  docTypeDeleteSuccess: [],

  docTypeFailure: ['error'],
  docTypeAllFailure: ['error'],
  docTypeUpdateFailure: ['error'],
  docTypeSearchFailure: ['error'],
  docTypeDeleteFailure: ['error'],
})

export const DocTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  docType: null,
  docTypes: [],
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
    docType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    docTypes: [],
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
  const { docType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    docType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { docTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    docTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { docType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    docType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { docTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    docTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    docType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    docType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    docTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    docType: state.docType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    docType: state.docType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    docTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DOC_TYPE_REQUEST]: request,
  [Types.DOC_TYPE_ALL_REQUEST]: allRequest,
  [Types.DOC_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.DOC_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.DOC_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.DOC_TYPE_SUCCESS]: success,
  [Types.DOC_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.DOC_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.DOC_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.DOC_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.DOC_TYPE_FAILURE]: failure,
  [Types.DOC_TYPE_ALL_FAILURE]: allFailure,
  [Types.DOC_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.DOC_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.DOC_TYPE_DELETE_FAILURE]: deleteFailure,
})
