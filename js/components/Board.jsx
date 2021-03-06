import React from 'react'
import Tile from './Tile'

require("./../../styles/board")

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
      showColorNames: true,

      // This format is best for mostly-empty grids.
      // If boards are more densely-populated, we could just use lists of lists.
      // Compression?
      tileData: {
        2: {color: '#fefefe'},
        4: {color: '#fefefe'},
        6: {color: '#efefef'}
      }
    }
  },

  updateColor: function (id, color) {
    // Oh god, mutating the state before you hit setState... Shoulda used redux.
    var tileData = this.state.tileData
    tileData[id] = {color: color}
    this.setState({tileData})
  },

  makeTiles: function (size, tileData, showColorNames) {
    var length = size[0] * size[1]
    var tiles = []
    for (var i = 0; i < length; i++) {
      tiles.push(
        <Tile
          key={i}
          updateColor={this.updateColor.bind(this, i)}
          width={1/size[0] * 100 + '%'}
          data={tileData[i]}
          showColorNames={showColorNames}
          />
      )
    }
    return tiles
  },

  render: function () {
    var data = this.state
    var tiles = this.makeTiles(data.size, data.tileData, data.showColorNames)

    return (
      <div className='board'>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div
          className='tiles'>
          {tiles}
        </div>
      </div>
    )
  }
})

export default Board
