import {
  GET_OBSERVATIONS,
  ADD_OBSERVATION,
  SORT_OBSERVATIONS
} from '../actions/types'

const initialState = {
  observations: [],
  isLoading: true
}

const observationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OBSERVATIONS:
      return {
        ...state,
        observations: action.payload,
        isLoading: false
      }
    case ADD_OBSERVATION:
      return {
        ...state,
        observations: state.observations.concat(action.payload)
      }
    case SORT_OBSERVATIONS:
      return {
        ...state,
        observations: state.observations.data
          .slice(0)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
        isLoading: true
      }
    default:
      return state
  }
}

export default observationReducer
