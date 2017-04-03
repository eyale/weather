import React, { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'


export default class Chart extends Component {

  render () {
    const {data, color} = this.props

    return (
      <div>
        <Sparklines height={200} width={400} data={data}>
          <SparklinesLine color={color} />
        </Sparklines>
      </div>
    )
  }
}