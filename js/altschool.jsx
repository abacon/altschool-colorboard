import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { createHistory, useBasename } from 'history'

import ListOfBoards from './routes/ListOfBoards'
import EditBoard from './routes/EditBoard'

var history = useBasename(createHistory)({
  basename: '/'
})

// React-router is a trash fire rn, just write the color board stuff first.
import Board from './components/Board'


var App = React.createClass({
  displayName: 'app',
  render: function() {
    return (<div>
      <Link to='/boards'>Boards</Link>
      <Link to='/'>Home</Link>
      <Board />
    </div>)
  }
})

render((
  <Router history={history} >
    <Route path="/" component={App}>
      <Route path="boards" component={ListOfBoards} />
      <Route path="board/:id" component={EditBoard} />
    </Route>
  </Router>
), document.getElementById('colorboard'))
