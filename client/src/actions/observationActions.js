import observationService from '../services/observations'
import { GET_OBSERVATIONS, ADD_OBSERVATION } from './types'

export const getObservations = () => async dispatch => {
  const observations = await observationService.getAll()

  dispatch({
    type: GET_OBSERVATIONS,
    payload: observations
  })
}

export const addObservation = observation => async dispatch => {
  try {
    const newObservation = await observationService.create(observation)

    dispatch({
      type: ADD_OBSERVATION,
      payload: newObservation
    })
    return newObservation
  } catch (exception) {
    console.log(exception)
  }
}
