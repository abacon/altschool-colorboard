import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import ListOfBoards from './routes/ListOfBoards'
import EditBoard from './routes/EditBoard'

var App = React.createClass({
  displayName: 'app',
  render: function() {
    <span> This is my favorite app. </span>
  }
})

React.createClass({
  render: function() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route path="boards" component={ListOfBoards} />
          <Route path="board/:id" component={EditBoard} />
        </Route>
      </Router>
    )
  }
})
