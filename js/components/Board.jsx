import React from 'react'
import Tile from './Tile'

var Board = React.createClass({
  displayName: "Board",
  propTypes: {
    boardName: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      name: "BFB??",
      description: "Baby's first board.",
      size: [4, 4],

      // This format is best for mostly-empty grids.
      // If boards are more densely-populated, we could just use lists of lists.
      // Compression?
      tileData: {
        2: {color: 'fefefe'},
        4: {color: 'fefefe'},
        6: {color: 'efefef'}
      }
    }
  },

  updateColor: function (id, color) {
    console.log(arguments)
  },

  makeTiles: function (size, tileData) {
    var length = size[0] * size[1]
    var tiles = []
    for (var i = 0; i < length; i++) {
      tiles.push(
        <Tile
          key={i}
          updateColor={this.updateColor.bind(this, i)}
          data={tileData[i]}
          />
      )
    }
    return tiles
  },

  render: function () {
    var data = this.state
    var tiles = this.makeTiles(data.size, data.tileData)

    return (
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        {tiles}
      </div>
    )
  }
})

export default Board
