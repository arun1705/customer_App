import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  subCategoryRequest: ['subCategoryId'],
  subCategoryAllRequest: ['options'],
  subCategoryUpdateRequest: ['subCategory'],
  subCategorySearchRequest: ['query'],
  subCategoryDeleteRequest: ['subCategoryId'],

  subCategorySuccess: ['subCategory'],
  subCategoryAllSuccess: ['subCategories'],
  subCategoryUpdateSuccess: ['subCategory'],
  subCategorySearchSuccess: ['subCategories'],
  subCategoryDeleteSuccess: [],

  subCategoryFailure: ['error'],
  subCategoryAllFailure: ['error'],
  subCategoryUpdateFailure: ['error'],
  subCategorySearchFailure: ['error'],
  subCategoryDeleteFailure: ['error'],
})

export const SubCategoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  subCategory: null,
  subCategories: [],
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
    subCategory: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    subCategories: [],
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
  const { subCategory } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    subCategory,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { subCategories } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    subCategories,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { subCategory } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    subCategory,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { subCategories } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    subCategories,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    subCategory: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    subCategory: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    subCategories: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    subCategory: state.subCategory,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    subCategory: state.subCategory,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    subCategories: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SUB_CATEGORY_REQUEST]: request,
  [Types.SUB_CATEGORY_ALL_REQUEST]: allRequest,
  [Types.SUB_CATEGORY_UPDATE_REQUEST]: updateRequest,
  [Types.SUB_CATEGORY_SEARCH_REQUEST]: searchRequest,
  [Types.SUB_CATEGORY_DELETE_REQUEST]: deleteRequest,

  [Types.SUB_CATEGORY_SUCCESS]: success,
  [Types.SUB_CATEGORY_ALL_SUCCESS]: allSuccess,
  [Types.SUB_CATEGORY_UPDATE_SUCCESS]: updateSuccess,
  [Types.SUB_CATEGORY_SEARCH_SUCCESS]: searchSuccess,
  [Types.SUB_CATEGORY_DELETE_SUCCESS]: deleteSuccess,

  [Types.SUB_CATEGORY_FAILURE]: failure,
  [Types.SUB_CATEGORY_ALL_FAILURE]: allFailure,
  [Types.SUB_CATEGORY_UPDATE_FAILURE]: updateFailure,
  [Types.SUB_CATEGORY_SEARCH_FAILURE]: searchFailure,
  [Types.SUB_CATEGORY_DELETE_FAILURE]: deleteFailure,
})
