import React from 'react'
import randomcolor from 'randomcolor'

require("./../../styles/tile")

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
    var color = this.props.data ? this.props.data.color : '#ffffff'
    var style = {
      backgroundColor: color,
      width: this.props.width
    }
    return <span
      className='tile'
      onClick={this.updateColor}
      style={style}>
      <span className='color-name'>{color}</span>
    </span>
  }

})

export default Tile
