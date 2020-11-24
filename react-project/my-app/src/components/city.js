import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const City = ({ weatherData, list }) => {
    const { id } = weatherData;
    const items = list;
    console.log(items);

    return (
        items.map((item) => 
        <div  className='weather-card' key={item[0]}>
            <button className='close-button'><FaTimesCircle className='close-icon' /></button>
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