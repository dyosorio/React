import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from "react-router-dom"
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';
import { useParams } from "react-router-dom";
const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';

const CityChart = () => {
    const [forecast, setForecast] = useState({});
    const [name, setName] = useState(''); 
    const [hasError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false); 
    const { cityId } = useParams();
    console.log({ cityId })
    const id = parseInt(cityId, 10);
    console.log(id)

    useEffect(() => {
        fetchForecast()
    }, []);

    async function fetchForecast(){
        try {
          setLoading(true)
          let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&units=metric`);
          let data = await response.json();
          setForecast(data.list);
          console.log(data)
          setName(data.city.name)
          return data;
        } 
        catch{
          setError('Uh oh, something has gone wrong...');
          return 0;
        }
        finally{
         setLoading(false);
        }
      }
    
    return (
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/"><FaChevronLeft className='home-icon'/></Link>
            </li> 
          </ul>
        </nav>
        <div className='chart-container'>
              <h1>5 day forecast for {name}</h1>
              <ResponsiveContainer width="100%" height={400}>
              <AreaChart width={600} height={400} data={forecast}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="dt_txt"/>
                <YAxis/>
                <Tooltip/>
                <Area type='monotone' dataKey='main.temp' stroke='#ff793f' fill='#f5cd79' />
                </AreaChart>
              </ResponsiveContainer>
        </div>
        </div>
    )
}

export default CityChart
