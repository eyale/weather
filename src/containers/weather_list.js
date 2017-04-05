import React, { Component } from 'react'
import {connect} from 'react-redux'
import  Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color={'purple'} units='C' /></td>
        <td><Chart data={pressures} color={'blue'} units='hPa' /></td>
        <td><Chart data={humidities} color={'green'} units='%' /></td>
      </tr>
    )
  }

  render() {
    const tHeadNames = [ 'City', 'Temperature (C)', 'Pressure (hPa)', 'Humidity (%)']

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
