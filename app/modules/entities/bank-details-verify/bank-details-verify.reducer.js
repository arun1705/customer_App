import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  bankDetailsVerifyRequest: ['bankDetailsVerifyId'],
  bankDetailsVerifyAllRequest: ['options'],
  bankDetailsVerifyUpdateRequest: ['bankDetailsVerify'],
  bankDetailsVerifySearchRequest: ['query'],
  bankDetailsVerifyDeleteRequest: ['bankDetailsVerifyId'],

  bankDetailsVerifySuccess: ['bankDetailsVerify'],
  bankDetailsVerifyAllSuccess: ['bankDetailsVerifies'],
  bankDetailsVerifyUpdateSuccess: ['bankDetailsVerify'],
  bankDetailsVerifySearchSuccess: ['bankDetailsVerifies'],
  bankDetailsVerifyDeleteSuccess: [],

  bankDetailsVerifyFailure: ['error'],
  bankDetailsVerifyAllFailure: ['error'],
  bankDetailsVerifyUpdateFailure: ['error'],
  bankDetailsVerifySearchFailure: ['error'],
  bankDetailsVerifyDeleteFailure: ['error'],
})

export const BankDetailsVerifyTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  bankDetailsVerify: null,
  bankDetailsVerifies: [],
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
    bankDetailsVerify: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    bankDetailsVerifies: [],
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
  const { bankDetailsVerify } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    bankDetailsVerify,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { bankDetailsVerifies } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    bankDetailsVerifies,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { bankDetailsVerify } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    bankDetailsVerify,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { bankDetailsVerifies } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    bankDetailsVerifies,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    bankDetailsVerify: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    bankDetailsVerify: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    bankDetailsVerifies: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    bankDetailsVerify: state.bankDetailsVerify,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    bankDetailsVerify: state.bankDetailsVerify,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    bankDetailsVerifies: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BANK_DETAILS_VERIFY_REQUEST]: request,
  [Types.BANK_DETAILS_VERIFY_ALL_REQUEST]: allRequest,
  [Types.BANK_DETAILS_VERIFY_UPDATE_REQUEST]: updateRequest,
  [Types.BANK_DETAILS_VERIFY_SEARCH_REQUEST]: searchRequest,
  [Types.BANK_DETAILS_VERIFY_DELETE_REQUEST]: deleteRequest,

  [Types.BANK_DETAILS_VERIFY_SUCCESS]: success,
  [Types.BANK_DETAILS_VERIFY_ALL_SUCCESS]: allSuccess,
  [Types.BANK_DETAILS_VERIFY_UPDATE_SUCCESS]: updateSuccess,
  [Types.BANK_DETAILS_VERIFY_SEARCH_SUCCESS]: searchSuccess,
  [Types.BANK_DETAILS_VERIFY_DELETE_SUCCESS]: deleteSuccess,

  [Types.BANK_DETAILS_VERIFY_FAILURE]: failure,
  [Types.BANK_DETAILS_VERIFY_ALL_FAILURE]: allFailure,
  [Types.BANK_DETAILS_VERIFY_UPDATE_FAILURE]: updateFailure,
  [Types.BANK_DETAILS_VERIFY_SEARCH_FAILURE]: searchFailure,
  [Types.BANK_DETAILS_VERIFY_DELETE_FAILURE]: deleteFailure,
})
