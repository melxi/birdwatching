import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-bootstrap'
import ObservationSummary from './ObservationSummary'

const ObservationList = props => {
  if (props.observations.isLoading) {
    return null
  }

  return (
    <React.Fragment>
      <Row>
        {props.observations.observations.map((observation, index) => (
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
