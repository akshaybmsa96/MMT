import React from 'react'
import '../styles/CityComponent.css'

const CityComponent = (props)=>{

    return (
        <div className="city-div">
            <div className="city-country-div">
                <p className="city-name"> {props.cityInfo.cityName}</p>
                <p className="city-country">{props.cityInfo.country}</p>
            </div>
            <p className="city-code">{props.cityInfo.code}</p>
        </div>
    )

}

export default CityComponent;