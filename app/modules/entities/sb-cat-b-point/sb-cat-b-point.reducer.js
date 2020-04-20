import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sbCatBPointRequest: ['sbCatBPointId'],
  sbCatBPointAllRequest: ['options'],
  sbCatBPointUpdateRequest: ['sbCatBPoint'],
  sbCatBPointSearchRequest: ['query'],
  sbCatBPointDeleteRequest: ['sbCatBPointId'],

  sbCatBPointSuccess: ['sbCatBPoint'],
  sbCatBPointAllSuccess: ['sbCatBPoints'],
  sbCatBPointUpdateSuccess: ['sbCatBPoint'],
  sbCatBPointSearchSuccess: ['sbCatBPoints'],
  sbCatBPointDeleteSuccess: [],

  sbCatBPointFailure: ['error'],
  sbCatBPointAllFailure: ['error'],
  sbCatBPointUpdateFailure: ['error'],
  sbCatBPointSearchFailure: ['error'],
  sbCatBPointDeleteFailure: ['error'],
})

export const SbCatBPointTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  sbCatBPoint: null,
  sbCatBPoints: [],
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
    sbCatBPoint: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    sbCatBPoints: [],
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
  const { sbCatBPoint } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    sbCatBPoint,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { sbCatBPoints } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    sbCatBPoints,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { sbCatBPoint } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    sbCatBPoint,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { sbCatBPoints } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    sbCatBPoints,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    sbCatBPoint: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    sbCatBPoint: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    sbCatBPoints: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    sbCatBPoint: state.sbCatBPoint,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    sbCatBPoint: state.sbCatBPoint,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    sbCatBPoints: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SB_CAT_B_POINT_REQUEST]: request,
  [Types.SB_CAT_B_POINT_ALL_REQUEST]: allRequest,
  [Types.SB_CAT_B_POINT_UPDATE_REQUEST]: updateRequest,
  [Types.SB_CAT_B_POINT_SEARCH_REQUEST]: searchRequest,
  [Types.SB_CAT_B_POINT_DELETE_REQUEST]: deleteRequest,

  [Types.SB_CAT_B_POINT_SUCCESS]: success,
  [Types.SB_CAT_B_POINT_ALL_SUCCESS]: allSuccess,
  [Types.SB_CAT_B_POINT_UPDATE_SUCCESS]: updateSuccess,
  [Types.SB_CAT_B_POINT_SEARCH_SUCCESS]: searchSuccess,
  [Types.SB_CAT_B_POINT_DELETE_SUCCESS]: deleteSuccess,

  [Types.SB_CAT_B_POINT_FAILURE]: failure,
  [Types.SB_CAT_B_POINT_ALL_FAILURE]: allFailure,
  [Types.SB_CAT_B_POINT_UPDATE_FAILURE]: updateFailure,
  [Types.SB_CAT_B_POINT_SEARCH_FAILURE]: searchFailure,
  [Types.SB_CAT_B_POINT_DELETE_FAILURE]: deleteFailure,
})
