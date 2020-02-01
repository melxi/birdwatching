import observationService from '../services/observations'
import { GET_OBSERVATIONS, ADD_OBSERVATION } from './types'

export const getObservations = () => async dispatch => {
  let observations
  const observationsData = await observationService.getAll()

  window.localStorage.setItem(
    'observationsJSON',
    JSON.stringify(observationsData)
  )
  const localObservations = window.localStorage.getItem('observationsJSON')
  if (localObservations) {
    observations = JSON.parse(localObservations)
  }

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
  } catch (exception) {
    console.log(exception)
  }
}
