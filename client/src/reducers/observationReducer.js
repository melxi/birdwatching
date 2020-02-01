import { GET_OBSERVATIONS, ADD_OBSERVATION } from '../actions/types'

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
    default:
      return state
  }
}

export default observationReducer
