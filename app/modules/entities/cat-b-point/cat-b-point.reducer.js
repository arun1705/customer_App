import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  catBPointRequest: ['catBPointId'],
  catBPointAllRequest: ['options'],
  catBPointUpdateRequest: ['catBPoint'],
  catBPointSearchRequest: ['query'],
  catBPointDeleteRequest: ['catBPointId'],

  catBPointSuccess: ['catBPoint'],
  catBPointAllSuccess: ['catBPoints'],
  catBPointUpdateSuccess: ['catBPoint'],
  catBPointSearchSuccess: ['catBPoints'],
  catBPointDeleteSuccess: [],

  catBPointFailure: ['error'],
  catBPointAllFailure: ['error'],
  catBPointUpdateFailure: ['error'],
  catBPointSearchFailure: ['error'],
  catBPointDeleteFailure: ['error'],
})

export const CatBPointTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  catBPoint: null,
  catBPoints: [],
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
    catBPoint: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    catBPoints: [],
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
  const { catBPoint } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    catBPoint,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { catBPoints } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    catBPoints,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { catBPoint } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    catBPoint,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { catBPoints } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    catBPoints,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    catBPoint: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    catBPoint: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    catBPoints: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    catBPoint: state.catBPoint,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    catBPoint: state.catBPoint,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    catBPoints: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CAT_B_POINT_REQUEST]: request,
  [Types.CAT_B_POINT_ALL_REQUEST]: allRequest,
  [Types.CAT_B_POINT_UPDATE_REQUEST]: updateRequest,
  [Types.CAT_B_POINT_SEARCH_REQUEST]: searchRequest,
  [Types.CAT_B_POINT_DELETE_REQUEST]: deleteRequest,

  [Types.CAT_B_POINT_SUCCESS]: success,
  [Types.CAT_B_POINT_ALL_SUCCESS]: allSuccess,
  [Types.CAT_B_POINT_UPDATE_SUCCESS]: updateSuccess,
  [Types.CAT_B_POINT_SEARCH_SUCCESS]: searchSuccess,
  [Types.CAT_B_POINT_DELETE_SUCCESS]: deleteSuccess,

  [Types.CAT_B_POINT_FAILURE]: failure,
  [Types.CAT_B_POINT_ALL_FAILURE]: allFailure,
  [Types.CAT_B_POINT_UPDATE_FAILURE]: updateFailure,
  [Types.CAT_B_POINT_SEARCH_FAILURE]: searchFailure,
  [Types.CAT_B_POINT_DELETE_FAILURE]: deleteFailure,
})
