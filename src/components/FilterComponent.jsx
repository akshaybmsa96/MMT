import React,{useState} from 'react'
import CityComponent from './CityComponent.jsx';
import {filterData} from './FilterData.js'
import '../styles/FilterComponent.css'

const FilterComp = (props) =>{
    const [searchKeyword,setSearchKeyword] = useState('');
    const searchRef = React.createRef();

    const getFilteredCities = ()=>{
        return filterData.filter((city)=>{
            return city.cityName.toLowerCase().includes(searchKeyword.toLowerCase());
        })
    }

    const inputChangeHandler = (e)=>{
        setSearchKeyword(searchRef.current.value)
    }

    const renderCities = () =>{
        let cities = [];
        if(searchKeyword){
            cities = getFilteredCities()
        } else {
            cities = filterData;
        }

        return cities.map((city)=>{
                return <CityComponent cityInfo={city}/>
            })

    }
    return (
        <div className="filter-div">
            <input placeholder="From" ref={searchRef} type="text" onChange={inputChangeHandler}></input>
            {renderCities()}
        </div>
    )

}


export default FilterComp;