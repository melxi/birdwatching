import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Badge, Button } from 'react-bootstrap'
import Moment from 'react-moment'

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
            format="HH:mm, D MMM YYYY"
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
