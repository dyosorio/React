import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';

const Search = () => {
    const [query, setQuery] = useState({});
    const [weatherData, setWeatherData] = useState({});
    
    const fetchData = async () => {
        try {
            const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}&units=metric`);
            const data = await fetchedData.json();
            console.log(data);
        } catch (error) {
            //
        }
    }
    return (
        <div>
            Hola 🌎
            <input 
                    className='search-input'
                    type='text'
                    placeholder='search by city...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            <button type="submit" className='search-button' onClick={() => {fetchData(query)}}>
            <FaSearch className='icon' />
            </button>
        </div>
    )
}

export default Search
