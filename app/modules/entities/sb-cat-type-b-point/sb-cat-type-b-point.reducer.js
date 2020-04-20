import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sbCatTypeBPointRequest: ['sbCatTypeBPointId'],
  sbCatTypeBPointAllRequest: ['options'],
  sbCatTypeBPointUpdateRequest: ['sbCatTypeBPoint'],
  sbCatTypeBPointSearchRequest: ['query'],
  sbCatTypeBPointDeleteRequest: ['sbCatTypeBPointId'],

  sbCatTypeBPointSuccess: ['sbCatTypeBPoint'],
  sbCatTypeBPointAllSuccess: ['sbCatTypeBPoints'],
  sbCatTypeBPointUpdateSuccess: ['sbCatTypeBPoint'],
  sbCatTypeBPointSearchSuccess: ['sbCatTypeBPoints'],
  sbCatTypeBPointDeleteSuccess: [],

  sbCatTypeBPointFailure: ['error'],
  sbCatTypeBPointAllFailure: ['error'],
  sbCatTypeBPointUpdateFailure: ['error'],
  sbCatTypeBPointSearchFailure: ['error'],
  sbCatTypeBPointDeleteFailure: ['error'],
})

export const SbCatTypeBPointTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  sbCatTypeBPoint: null,
  sbCatTypeBPoints: [],
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
    sbCatTypeBPoint: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    sbCatTypeBPoints: [],
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
  const { sbCatTypeBPoint } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    sbCatTypeBPoint,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { sbCatTypeBPoints } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    sbCatTypeBPoints,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { sbCatTypeBPoint } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    sbCatTypeBPoint,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { sbCatTypeBPoints } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    sbCatTypeBPoints,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    sbCatTypeBPoint: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    sbCatTypeBPoint: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    sbCatTypeBPoints: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    sbCatTypeBPoint: state.sbCatTypeBPoint,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    sbCatTypeBPoint: state.sbCatTypeBPoint,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    sbCatTypeBPoints: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SB_CAT_TYPE_B_POINT_REQUEST]: request,
  [Types.SB_CAT_TYPE_B_POINT_ALL_REQUEST]: allRequest,
  [Types.SB_CAT_TYPE_B_POINT_UPDATE_REQUEST]: updateRequest,
  [Types.SB_CAT_TYPE_B_POINT_SEARCH_REQUEST]: searchRequest,
  [Types.SB_CAT_TYPE_B_POINT_DELETE_REQUEST]: deleteRequest,

  [Types.SB_CAT_TYPE_B_POINT_SUCCESS]: success,
  [Types.SB_CAT_TYPE_B_POINT_ALL_SUCCESS]: allSuccess,
  [Types.SB_CAT_TYPE_B_POINT_UPDATE_SUCCESS]: updateSuccess,
  [Types.SB_CAT_TYPE_B_POINT_SEARCH_SUCCESS]: searchSuccess,
  [Types.SB_CAT_TYPE_B_POINT_DELETE_SUCCESS]: deleteSuccess,

  [Types.SB_CAT_TYPE_B_POINT_FAILURE]: failure,
  [Types.SB_CAT_TYPE_B_POINT_ALL_FAILURE]: allFailure,
  [Types.SB_CAT_TYPE_B_POINT_UPDATE_FAILURE]: updateFailure,
  [Types.SB_CAT_TYPE_B_POINT_SEARCH_FAILURE]: searchFailure,
  [Types.SB_CAT_TYPE_B_POINT_DELETE_FAILURE]: deleteFailure,
})
