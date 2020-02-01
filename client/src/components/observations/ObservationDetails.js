import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { Container, Col, Row, Card, Badge } from 'react-bootstrap'

const ObservationSummary = ({ observation }) => {
  const { name, rarity, notes, observationImage, createdAt } = observation

  if (!observation) {
    return null
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="m-auto">
          <Card className="my-3">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{notes}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Badge>{rarity}</Badge>
                <Moment
                  className="float-right text-muted"
                  format="D MMM YYYY"
                  withTitle
                >
                  <small className="text-muted">{createdAt}</small>
                </Moment>
              </div>
            </Card.Body>
            <Card.Img src={`../assets/images/${observationImage}`} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    observation: state.observations.observations.data.find(
      observation => observation.id === id
    )
  }
}

export default connect(mapStateToProps)(ObservationSummary)
