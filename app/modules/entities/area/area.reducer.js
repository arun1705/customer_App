import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  areaRequest: ['areaId'],
  areaAllRequest: ['id'],
  areaUpdateRequest: ['area'],
  areaSearchRequest: ['query'],
  areaDeleteRequest: ['areaId'],

  areaSuccess: ['area'],
  areaAllSuccess: ['areas'],
  areaUpdateSuccess: ['area'],
  areaSearchSuccess: ['areas'],
  areaDeleteSuccess: [],

  areaFailure: ['error'],
  areaAllFailure: ['error'],
  areaUpdateFailure: ['error'],
  areaSearchFailure: ['error'],
  areaDeleteFailure: ['error'],
})

export const AreaTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  area: null,
  areas: [],
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
    area: null,
  })

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    areas: [],
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
  const { area } = action
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    area,
  })
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { areas } = action
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    areas,
  })
}
// successful api update
export const updateSuccess = (state, action) => {
  const { area } = action
  return state.merge({
    updating: false,
    errorUpdating: null,
    area,
  })
}
// successful api search
export const searchSuccess = (state, action) => {
  const { areas } = action
  return state.merge({
    searching: false,
    errorSearching: null,
    areas,
  })
}
// successful api delete
export const deleteSuccess = state => {
  return state.merge({
    deleting: false,
    errorDeleting: null,
    area: null,
  })
}

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    area: null,
  })
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    areas: [],
  })
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action
  return state.merge({
    updating: false,
    errorUpdating: error,
    area: state.area,
  })
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action
  return state.merge({
    deleting: false,
    errorDeleting: error,
    area: state.area,
  })
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action
  return state.merge({
    searching: false,
    errorSearching: error,
    areas: [],
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AREA_REQUEST]: request,
  [Types.AREA_ALL_REQUEST]: allRequest,
  [Types.AREA_UPDATE_REQUEST]: updateRequest,
  [Types.AREA_SEARCH_REQUEST]: searchRequest,
  [Types.AREA_DELETE_REQUEST]: deleteRequest,

  [Types.AREA_SUCCESS]: success,
  [Types.AREA_ALL_SUCCESS]: allSuccess,
  [Types.AREA_UPDATE_SUCCESS]: updateSuccess,
  [Types.AREA_SEARCH_SUCCESS]: searchSuccess,
  [Types.AREA_DELETE_SUCCESS]: deleteSuccess,

  [Types.AREA_FAILURE]: failure,
  [Types.AREA_ALL_FAILURE]: allFailure,
  [Types.AREA_UPDATE_FAILURE]: updateFailure,
  [Types.AREA_SEARCH_FAILURE]: searchFailure,
  [Types.AREA_DELETE_FAILURE]: deleteFailure,
})
