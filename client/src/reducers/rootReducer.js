import { combineReducers } from 'redux'
import observationReducer from './observationReducer'

const rootReducer = combineReducers({
  observations: observationReducer
})

export default rootReducer
