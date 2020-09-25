import React, { useState } from 'react'
import CityComponent from './CityComponent.jsx';
import { filterData } from './FilterData.js'
import '../styles/FilterComponent.css'
import searchIcon from '../assets/lens.png'

const FilterComp = (props) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const searchRef = React.createRef();

    const getFilteredCities = () => {
        return filterData.filter((city) => {
            return city.cityName.toLowerCase().startsWith(searchKeyword.toLowerCase());
        })
    }

    const inputChangeHandler = (e) => {
        setSearchKeyword(searchRef.current.value)
    }

    const renderCities = () => {
        let cities = [];
        if (searchKeyword) {
            cities = getFilteredCities()
        } else {
            cities = filterData;
        }

        if(cities.length){
            return cities.map((city,index) => {
                return <CityComponent key={index} cityInfo={city} />
            })
        } else{
            return "No Data Found";
        }

    }
    return (
        <div className="filter-div">
            <div className="input-div">
                <img className="search-icon" alt="seachIcon" src={searchIcon}/>
                <input className="serach-box-input" placeholder="From" ref={searchRef} type="text" onChange={inputChangeHandler}></input>
            </div>
            <p className="popular-text">Popular Cities</p>
            <div className="filtered-data-div">
                {renderCities()}
            </div>
        </div>
    )

}


export default FilterComp;