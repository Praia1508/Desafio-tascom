import React from 'react'
import './styles.css'

function Country(props) {
  return ( 
    <div className="country-container">
        <div className="country-header">
            <p id='title-header'>{`UPDATED: ${props.data.Date.slice(0,7)}`} <span id='green'>{props.data.Date.slice(11,16)}</span></p>
            <h3>{`${props.data.CountryCode} ${props.data.Country}`}</h3>
            <h4>{props.data.TotalConfirmed}</h4>
            <p id='green'>CONFIRMED CASES</p>
            <h4>{props.data.TotalDeaths}</h4>
            <p id='green'>CASES OF DEATH</p>
        </div>
        <hr className='horizontalSeparator'/>
        <div className="country-content">
          <div className="country-stats">
            <div>
              <p>{props.data.NewDeaths}</p>
              <p id='green'>NEW DEATHS</p>
            </div>
            <div>
              <p>{props.data.NewRecovered}</p>
              <p id='green'>NEW RECOVEREDS</p>
            </div>
          </div>
          <div className="country-stats">
            <div>
              <p>{props.data.NewConfirmed}</p>
              <p id='green'>NEW CONFIRMEDS</p>
            </div>
            <div>
              <p>{props.data.TotalRecovered}</p>
              <p id='green'>TOTAL RECOVEREDS</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Country
