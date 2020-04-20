import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  phoneRequest: ['phoneId'],
  phoneAllRequest: ['userId'],
  phoneUpdateRequest: ['phone'],
  phoneSearchRequest: ['query'],
  phoneDeleteRequest: ['phoneId'],

  phoneSuccess: ['phone'],
  phoneAllSuccess: ['phones'],
  phoneUpdateSuccess: ['phone'],
  phoneSearchSuccess: ['phones'],
  phoneDeleteSuccess: [],

  phoneFailure: ['error'],
  phoneAllFailure: ['error'],
  phoneUpdateFailure: ['error'],
  phoneSearchFailure: ['error'],
  phoneDeleteFailure: ['error'],
})

export const PhoneTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  phone: null,
  phones: [],
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
    phone: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    phones: [],
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
  const { phone } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    phone,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { phones } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    phones,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { phone } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    phone,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { phones } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    phones,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    phone: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    phone: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    phones: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    phone: state.phone,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    phone: state.phone,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    phones: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PHONE_REQUEST]: request,
  [Types.PHONE_ALL_REQUEST]: allRequest,
  [Types.PHONE_UPDATE_REQUEST]: updateRequest,
  [Types.PHONE_SEARCH_REQUEST]: searchRequest,
  [Types.PHONE_DELETE_REQUEST]: deleteRequest,

  [Types.PHONE_SUCCESS]: success,
  [Types.PHONE_ALL_SUCCESS]: allSuccess,
  [Types.PHONE_UPDATE_SUCCESS]: updateSuccess,
  [Types.PHONE_SEARCH_SUCCESS]: searchSuccess,
  [Types.PHONE_DELETE_SUCCESS]: deleteSuccess,

  [Types.PHONE_FAILURE]: failure,
  [Types.PHONE_ALL_FAILURE]: allFailure,
  [Types.PHONE_UPDATE_FAILURE]: updateFailure,
  [Types.PHONE_SEARCH_FAILURE]: searchFailure,
  [Types.PHONE_DELETE_FAILURE]: deleteFailure,
})
