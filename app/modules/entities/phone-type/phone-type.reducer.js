import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  phoneTypeRequest: ['phoneTypeId'],
  phoneTypeAllRequest: ['options'],
  phoneTypeUpdateRequest: ['phoneType'],
  phoneTypeSearchRequest: ['query'],
  phoneTypeDeleteRequest: ['phoneTypeId'],

  phoneTypeSuccess: ['phoneType'],
  phoneTypeAllSuccess: ['phoneTypes'],
  phoneTypeUpdateSuccess: ['phoneType'],
  phoneTypeSearchSuccess: ['phoneTypes'],
  phoneTypeDeleteSuccess: [],

  phoneTypeFailure: ['error'],
  phoneTypeAllFailure: ['error'],
  phoneTypeUpdateFailure: ['error'],
  phoneTypeSearchFailure: ['error'],
  phoneTypeDeleteFailure: ['error'],
})

export const PhoneTypeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  phoneType: null,
  phoneTypes: [],
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
    phoneType: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    phoneTypes: [],
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
  const { phoneType } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    phoneType,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { phoneTypes } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    phoneTypes,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { phoneType } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    phoneType,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { phoneTypes } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    phoneTypes,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    phoneType: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    phoneType: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    phoneTypes: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    phoneType: state.phoneType,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    phoneType: state.phoneType,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    phoneTypes: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PHONE_TYPE_REQUEST]: request,
  [Types.PHONE_TYPE_ALL_REQUEST]: allRequest,
  [Types.PHONE_TYPE_UPDATE_REQUEST]: updateRequest,
  [Types.PHONE_TYPE_SEARCH_REQUEST]: searchRequest,
  [Types.PHONE_TYPE_DELETE_REQUEST]: deleteRequest,

  [Types.PHONE_TYPE_SUCCESS]: success,
  [Types.PHONE_TYPE_ALL_SUCCESS]: allSuccess,
  [Types.PHONE_TYPE_UPDATE_SUCCESS]: updateSuccess,
  [Types.PHONE_TYPE_SEARCH_SUCCESS]: searchSuccess,
  [Types.PHONE_TYPE_DELETE_SUCCESS]: deleteSuccess,

  [Types.PHONE_TYPE_FAILURE]: failure,
  [Types.PHONE_TYPE_ALL_FAILURE]: allFailure,
  [Types.PHONE_TYPE_UPDATE_FAILURE]: updateFailure,
  [Types.PHONE_TYPE_SEARCH_FAILURE]: searchFailure,
  [Types.PHONE_TYPE_DELETE_FAILURE]: deleteFailure,
})
