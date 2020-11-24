import React, { useState } from 'react'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import City from './city';

const Search = () => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    const [hasError, setError] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`

    const fetchWeather = async(e) => {
        if(query !== ''){
            setLoading(true);
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if( data.cod === '404'){
                    setNoResults(true);
                    setLoading(false);
                } 
                else {
                    console.log(data);
                    setQuery(data);
                    setWeatherData(data);
                    setLoading(false);
                    setNoResults(false);
                    //add new cities to the list
                    const description = data.weather[0].description;
                    const main = data.weather[0].main;
                    const maxTemp = Math.round(data.main.temp_max);
                    const minTemp = Math.round(data.main.temp_min);
                    const item = [data.id, data.name, data.sys.country, main, description, maxTemp, minTemp, data.coord.lat, data.coord.lon];
                    setList([...list, item])
                }
                setQuery('')
            })
            .catch(error => {  
                setError(true);
                setLoading(false);
            });
        }
    }

    //remove duplicates functionality = PENDING!
    /*
    const filterDuplicate = (id) => {
        const uniqueValues = list.find((item) => item.id === id);
    } */
    //remove individual items
    const removeItem = (id) => {
        //return item whose id don't match the passed id
        setList(list.filter((item) => item[0] !== id))
    }

    return (
        <div className='weather-container'>
            <div className='search-element'>
                <input 
                    className='search-input'
                    type='text'
                    placeholder='search by city...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className='search-button' onClick={() => {fetchWeather(query)}}>
                    <FaSearch className='search-icon' />
                </button>
            </div>
            {hasError && <p>Uh oh, something has gone wrong...</p>}
            {noResults && (<div><FaMapMarkerAlt /><p>Uh oh, no results found</p></div>)}
            {weatherData && (
                <City 
                weatherData={weatherData} 
                list={list} 
                removeItem={removeItem}
                isLoading={isLoading}
                />
            )}
        </div>
    )
}

export default Search;
