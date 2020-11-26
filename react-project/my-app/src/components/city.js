import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const City = ({ list, removeItem, isLoading }) => {
    //remove duplicate city input from array
    //this function will prevent duplicate cities from rendering (add alert!!)
    function removeDuplicates(list) {
        let stringArray = list.map(JSON.stringify);
        let uniqueStringArray = new Set(stringArray);
        let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
        return uniqueArray;
    }
    
    const uniqueCities = removeDuplicates(list);
        
    return (
        uniqueCities.map((item) =>
        <div  className='weather-card' key={item[0]}>
            {isLoading && (<div><p>Loading...</p></div>)}
            <button className='close-button' onClick={()=>removeItem(item[0])}>
                <FaTimesCircle className='close-icon' />
            </button>
            <h1 className='city-name'>{item[1]}, {item[2]}</h1>
            <h2>{item[3]}</h2>
            <p>{item[4]}</p>
            <div className='number-data'>
                <p className='max-temp'>max temp: {item[5]}</p>
                <p className='min-temp'>min temp: {item[6]}</p>
                <p>location: {item[7]}, {item[8]}</p>
            </div>
        </div>
        )
    )
};

export default City;