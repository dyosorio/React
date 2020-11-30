import React, { useState } from 'react'
import { FaSearch, FaMapMarkerAlt, FaExclamationCircle } from 'react-icons/fa';
import City from './City'
import Spinner from './LoadingSpinner'

const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';

const Search = () => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState({});
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(false); 
    const [hasError, setError] = useState(false);
    const [noResults, setNoResults] = useState(false);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`);
            const data = await fetchedData.json();
            if (data.cod === '404') {
                setLoading(false);
                setNoResults('City not found'); 
            } else {
                setQuery(data);
                setWeatherData(data);
                setLoading(false);
                setNoResults(false);
                setError(false);
                //add new cities to the list
                const description = data.weather[0].description;
                const main = data.weather[0].main;
                const maxTemp = Math.round(data.main.temp_max);
                const minTemp = Math.round(data.main.temp_min);
                const item = [data.id, data.name, data.sys.country, main, description, maxTemp, minTemp, data.coord.lat, data.coord.lon];
                setList([...list, item])
            }
            setQuery('');
        } catch (error) {
            setError('Uh oh, something has gone wrong...');
            if(query.length < 1){
                setError('Search for a city...')
                setNoResults(false);
            }
            setQuery('');
        }
        finally {
            setLoading(false);
        }
    }
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
                <button type="submit" className='search-button' onClick={() => {fetchData(query)}}>
                    <FaSearch className='search-icon' />
                </button>
            </div>
            {isLoading && (<div><Spinner /></div>)}
            {hasError && (
            <div className='hasError'>
                <FaExclamationCircle /><p>{hasError}</p>
            </div>)}
            {noResults && (
                <div className='noResults'>
                    <FaMapMarkerAlt /><p>{noResults}</p>
                </div>)}
            {weatherData && (
                <City 
                list={list} 
                removeItem={removeItem}
                isLoading={isLoading}
                />
            )}
        </div>
    )
}

export default Search
