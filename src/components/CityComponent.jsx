import React from 'react'
import '../styles/CityComponent.css'

const CityComponent = (props)=>{

    return (
        <div>
            <p className="city-name"> {props.cityInfo.cityName}</p>
            <p className="city-code">{props.cityInfo.code}</p>
            <p className="city-country">{props.cityInfo.country}</p>
        </div>
    )

}

export default CityComponent;