import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getObservations } from './actions/observationActions'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import ObservationDetails from './components/observations/ObservationDetails'
import CreateObservation from './components/observations/CreateObservation'

function App(props) {
  useEffect(() => {
    if (props.observations.isLoading) {
      props.getObservations()
    }
  }, [props.observations.observations.data])

  return (
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/observation/:id" component={ObservationDetails} />
          <Route path="/create" component={CreateObservation} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    observations: state.observations
  }
}

const mapDispatchToProps = {
  getObservations
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
