import React from 'react'
import randomcolor from 'randomcolor'
import classnames from 'classnames'

require("./../../styles/tile")

var Tile = React.createClass({
  displayName: "Tile",
  propTypes: {
    data: React.PropTypes.object,
    showColorNames: React.PropTypes.boolean,
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

    var colorNameClasses = classnames(
      'color-name',
      {hidden: !this.props.showColorNames}
    )

    return <span
      className='tile'
      onClick={this.updateColor}
      style={style}>
      <span
        className={colorNameClasses}>
        {color}</span>
    </span>
  }

})

export default Tile
