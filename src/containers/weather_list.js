import React, { Component } from 'react'
import {connect} from 'react-redux'
import  Chart from '../components/chart'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>

          <Chart data={temps} color={'purple'} />

          {/*<Sparklines height={200} width={400} data={temps}>*/}
            {/*<SparklinesLine color='purple' />*/}
          {/*</Sparklines>*/}
        </td>
      </tr>
    )
  }

  render() {
    const tHeadNames = [ 'City', 'Temperature', 'Pressure', 'Humidity']

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            {tHeadNames.map(el => <th key={el}>{el}</th>)}
            </tr>
        </thead>
        <tbody>
              {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
