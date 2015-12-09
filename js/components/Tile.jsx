import React from 'react'
import randomcolor from 'randomcolor'

var Tile = React.createClass({
  displayName: "Tile",
  propTypes: {
    data: React.PropTypes.object,
    updateColor: React.PropTypes.func
  },

  shouldComponentUpdate: function () {
    return true;
  },

  updateColor: function () {
    this.props.updateColor(randomcolor())
  },

  render: function () {
    var color = this.props.data ? this.props.data.color : 'ffffff'
    var style = {
      backgroundColor: color
    }
    return <span
      onClick={this.updateColor}
      style={style}>
      {color}
    </span>
  }

})

export default Tile
