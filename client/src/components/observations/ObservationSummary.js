import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Col, Card, Badge, Button } from 'react-bootstrap'

const ObservationSummary = ({ observation }) => {
  const { id, name, rarity, observationImage, createdAt } = observation
  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: '18rem', margin: 'auto' }} className="mb-4">
        <Card.Img variant="top" src={`assets/images/${observationImage}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={'observation/' + id}>
            <Button variant="primary">View details</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <Badge variant="secondary">{rarity}</Badge>
          <Moment
            className="float-right text-muted"
            format="D MMM YYYY"
            withTitle
          >
            {createdAt}
          </Moment>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default ObservationSummary
