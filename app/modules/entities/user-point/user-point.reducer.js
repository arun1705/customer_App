import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userPointRequest: ['userPointId'],
  userPointAllRequest: ['options'],
  userPointUpdateRequest: ['userPoint'],
  userPointSearchRequest: ['query'],
  userPointDeleteRequest: ['userPointId'],

  userPointSuccess: ['userPoint'],
  userPointAllSuccess: ['userPoints'],
  userPointUpdateSuccess: ['userPoint'],
  userPointSearchSuccess: ['userPoints'],
  userPointDeleteSuccess: [],

  userPointFailure: ['error'],
  userPointAllFailure: ['error'],
  userPointUpdateFailure: ['error'],
  userPointSearchFailure: ['error'],
  userPointDeleteFailure: ['error'],
})

export const UserPointTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  userPoint: null,
  userPoints: [],
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
    userPoint: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    userPoints: [],
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
  const { userPoint } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    userPoint,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { userPoints } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    userPoints,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { userPoint } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    userPoint,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { userPoints } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    userPoints,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    userPoint: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    userPoint: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    userPoints: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    userPoint: state.userPoint,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    userPoint: state.userPoint,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    userPoints: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_POINT_REQUEST]: request,
  [Types.USER_POINT_ALL_REQUEST]: allRequest,
  [Types.USER_POINT_UPDATE_REQUEST]: updateRequest,
  [Types.USER_POINT_SEARCH_REQUEST]: searchRequest,
  [Types.USER_POINT_DELETE_REQUEST]: deleteRequest,

  [Types.USER_POINT_SUCCESS]: success,
  [Types.USER_POINT_ALL_SUCCESS]: allSuccess,
  [Types.USER_POINT_UPDATE_SUCCESS]: updateSuccess,
  [Types.USER_POINT_SEARCH_SUCCESS]: searchSuccess,
  [Types.USER_POINT_DELETE_SUCCESS]: deleteSuccess,

  [Types.USER_POINT_FAILURE]: failure,
  [Types.USER_POINT_ALL_FAILURE]: allFailure,
  [Types.USER_POINT_UPDATE_FAILURE]: updateFailure,
  [Types.USER_POINT_SEARCH_FAILURE]: searchFailure,
  [Types.USER_POINT_DELETE_FAILURE]: deleteFailure,
})
