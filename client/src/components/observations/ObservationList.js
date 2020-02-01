import React from 'react'
import { connect } from 'react-redux'
import ObservationSummary from './ObservationSummary'
import { Row, Button } from 'react-bootstrap'

const ObservationList = props => {
  const sortByDate = () => {
    props.dispatch({ type: 'SORT_OBSERVATIONS' })
  }
  if (props.observations.isLoading) {
    return null
  }

  return (
    <React.Fragment>
      <Button className="my-3 ml-3" onClick={sortByDate}>
        Sort
      </Button>
      <Row>
        {props.observations.observations.data.map((observation, index) => (
          <ObservationSummary key={index} observation={observation} />
        ))}
      </Row>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    observations: state.observations
  }
}

export default connect(mapStateToProps)(ObservationList)
