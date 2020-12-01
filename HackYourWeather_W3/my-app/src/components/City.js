import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import { Link } from "react-router-dom";

const City = ({ list, removeItem }) => {
    //remove duplicate city from array
    function removeDuplicates(list) {
        let stringArray = list.map(JSON.stringify);
        let uniqueStringArray = new Set(stringArray);
        let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
        return uniqueArray;
    }
    
    const uniqueCities = removeDuplicates(list);
    function returnIcon(element) {
        let iconSource = '';
        if (element === '01d') {
            return iconSource = 'http://openweathermap.org/img/wn/01d@2x.png';
        }
        if (element === '01n') {
            return iconSource = 'http://openweathermap.org/img/wn/01n@2x.png';
        }
        if (element === '02d') {
            return iconSource = 'http://openweathermap.org/img/wn/02d@2x.png';
        }
        if (element === '02n') {
            return iconSource = 'http://openweathermap.org/img/wn/02n@2x.png';
        }
        if (element === '03d') {
            return iconSource = 'http://openweathermap.org/img/wn/03d@2x.png';
        }
        if (element === '03n') {
            return iconSource = 'http://openweathermap.org/img/wn/03n@2x.png';
        }
        if (element === '04d') {
            return iconSource = 'http://openweathermap.org/img/wn/04d@2x.png';
        }
        if (element === '04n') {
            return iconSource = 'http://openweathermap.org/img/wn/04n@2x.png';
        }
        if (element === '09d') {
            return iconSource = 'http://openweathermap.org/img/wn/09d@2x.png';
        }
        if (element === '09n') {
            return iconSource = 'http://openweathermap.org/img/wn/09n@2x.png';
        }
        if (element === '10d') {
            return iconSource = 'http://openweathermap.org/img/wn/10d@2x.png';
        }
        if (element === '10n') {
            return iconSource = 'http://openweathermap.org/img/wn/10n@2x.png';
        }
        if (element === '11d') {
            return iconSource = 'http://openweathermap.org/img/wn/11d@2x.png';
        }
        if (element === '11n') {
            return iconSource = 'http://openweathermap.org/img/wn/11n@2x.png';
        }
        if (element === '13d') {
            return iconSource = 'http://openweathermap.org/img/wn/13d@2x.png';
        }
        if (element === '13n') {
            return iconSource = 'http://openweathermap.org/img/wn/13dn@2x.png';
        }
        if (element === '50d') {
            return iconSource = 'http://openweathermap.org/img/wn/50d@2x.png';
        }
        if (element === '50n') {
            return iconSource = 'http://openweathermap.org/img/wn/50n@2x.png';
        }
        return iconSource;
    }

    return (
        uniqueCities.map((item) =>
        <div  className='weather-card' key={item[0]}>
            <button className='close-button' onClick={()=>removeItem(item[0])}>
                <FaTimesCircle className='close-icon' />
            </button>
            <div className='card-header'>
                <Link to={`/${item[0]}`}>
                <h1 className='city-name'>{item[1]}, {item[2]}</h1>
                </Link>
                <h2>{item[3]}</h2>
                <img src={returnIcon(item[4])} alt='' className='icon'/><p>{item[5]}</p>
            </div>
            <div className='number-data'>
                <p>max temp: {item[6]}</p>
                <p>min temp: {item[7]}</p>
                <p>location: {item[8]}, {item[9]}</p>
            </div>
        </div>
    ))
}

export default City
