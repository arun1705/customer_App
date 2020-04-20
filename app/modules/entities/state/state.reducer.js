import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  stateRequest: ['stateId'],
  stateAllRequest: ['id'],
  stateUpdateRequest: ['state'],
  stateSearchRequest: ['query'],
  stateDeleteRequest: ['stateId'],

  stateSuccess: ['state'],
  stateAllSuccess: ['states'],
  stateUpdateSuccess: ['state'],
  stateSearchSuccess: ['states'],
  stateDeleteSuccess: [],

  stateFailure: ['error'],
  stateAllFailure: ['error'],
  stateUpdateFailure: ['error'],
  stateSearchFailure: ['error'],
  stateDeleteFailure: ['error'],
})

export const StateTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  stateE: null,
  states: [],
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
    state: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    states: [],
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
  const { stateE } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    stateE,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { states } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    states,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { stateE } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    stateE,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { states } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    states,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    stateE: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    stateE: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    states: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    stateE: state.state,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    stateE: state.state,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    states: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STATE_REQUEST]: request,
  [Types.STATE_ALL_REQUEST]: allRequest,
  [Types.STATE_UPDATE_REQUEST]: updateRequest,
  [Types.STATE_SEARCH_REQUEST]: searchRequest,
  [Types.STATE_DELETE_REQUEST]: deleteRequest,

  [Types.STATE_SUCCESS]: success,
  [Types.STATE_ALL_SUCCESS]: allSuccess,
  [Types.STATE_UPDATE_SUCCESS]: updateSuccess,
  [Types.STATE_SEARCH_SUCCESS]: searchSuccess,
  [Types.STATE_DELETE_SUCCESS]: deleteSuccess,

  [Types.STATE_FAILURE]: failure,
  [Types.STATE_ALL_FAILURE]: allFailure,
  [Types.STATE_UPDATE_FAILURE]: updateFailure,
  [Types.STATE_SEARCH_FAILURE]: searchFailure,
  [Types.STATE_DELETE_FAILURE]: deleteFailure,
})
