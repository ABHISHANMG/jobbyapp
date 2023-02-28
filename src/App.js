import {Route, Switch, Link, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import JobsDisplay from './components/JobsDisplay'
import SpecificJob from './components/SpecificJob'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <div className="bg-container">
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={JobsDisplay} />
      <ProtectedRoute exact path="/jobs/:id" component={SpecificJob} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
