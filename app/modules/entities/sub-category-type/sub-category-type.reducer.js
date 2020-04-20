import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  subCategoryTypeRequest: ['subCategoryTypeId'],
  subCategoryTypeAllRequest: ['options'],
  subCategoryTypeUpdateRequest: ['subCategoryType'],
  subCategoryTypeSearchRequest: ['query'],
  subCategoryTypeDeleteRequest: ['subCategoryTypeId'],

  subCategoryTypeSuccess: ['subCategoryType'],
  subCategoryTypeAllSuccess: ['subCategoryTypes'],
  subCategoryTypeUpdateSuccess: ['subCategoryType'],
  subCategoryTypeSearchSuccess: ['subCategoryTypes'],
  subCategoryTypeDeleteSuccess: [],

  subCategoryTypeFailure: ['error'],
  subCategoryTypeAllFailure: ['error'],
  subCategoryTypeUpdateFailure: ['error'],
  subCategoryTypeSearchFailure: ['error'],
  subCategoryTypeDeleteFailure: ['error'],
})

export const SubCategoryTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  subCategoryType: null,
  subCategoryTypes: [],
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
    subCategoryType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    subCategoryTypes: [],
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
  const { subCategoryType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    subCategoryType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { subCategoryTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    subCategoryTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { subCategoryType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    subCategoryType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { subCategoryTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    subCategoryTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    subCategoryType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    subCategoryType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    subCategoryTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    subCategoryType: state.subCategoryType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    subCategoryType: state.subCategoryType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    subCategoryTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUB_CATEGORY_TYPE_REQUEST]: request,
  [Types.SUB_CATEGORY_TYPE_ALL_REQUEST]: allRequest,
  [Types.SUB_CATEGORY_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.SUB_CATEGORY_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.SUB_CATEGORY_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.SUB_CATEGORY_TYPE_SUCCESS]: success,
  [Types.SUB_CATEGORY_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.SUB_CATEGORY_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.SUB_CATEGORY_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.SUB_CATEGORY_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.SUB_CATEGORY_TYPE_FAILURE]: failure,
  [Types.SUB_CATEGORY_TYPE_ALL_FAILURE]: allFailure,
  [Types.SUB_CATEGORY_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.SUB_CATEGORY_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.SUB_CATEGORY_TYPE_DELETE_FAILURE]: deleteFailure,
})
