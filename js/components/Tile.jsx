import React from 'react'
import randomcolor from 'randomcolor'

var Tile = React.createClass({
  displayName: "Tile",
  propTypes: {
    data: React.PropTypes.object,
    updateColor: React.PropTypes.func
  },

  updateColor: function () {
    this.props.updateColor(randomcolor())
  },

  render: function () {
    var color = this.props.data ? this.props.data.color : '000000'
    return <span
      onClick={this.updateColor}
      style={{backgroundColor: `#${color}`}}>
      {color}
    </span>
  }

})

export default Tile
