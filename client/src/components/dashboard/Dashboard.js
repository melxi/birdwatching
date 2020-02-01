import React from 'react'
import { Link } from 'react-router-dom'
import ObservationList from '../observations/ObservationList'
import { Jumbotron, Button } from 'react-bootstrap'

const Dashboard = () => (
  <div>
    <Jumbotron>
      <h1>Bird Watching</h1>
      <p>Explore varieties of birds by Bird Watching</p>
      <Link to="/create">
        <Button variant="primary">Add observation</Button>
      </Link>
    </Jumbotron>
    <ObservationList />
  </div>
)

export default Dashboard
