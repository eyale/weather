import _ from 'lodash'
import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data) {
  return _.round(_.sum(data)/data.length)
}

export default class Chart extends Component {

  render () {
    const {data, color, units} = this.props

    return (
      <div>
        <Sparklines height={220} width={280} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type='avg'/>
        </Sparklines>
        <div>{average(data)} {units}</div>
      </div>
    )
  }
}