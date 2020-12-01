import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
const API_KEY = 'a54b947f262e2c5b975e64258dc64f90';

const CityChart = () => {
    const [forecast, setForecast] = useState({});
    const [name, setName] = useState(''); //for testing only, delete later
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
          let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&units=metric`);
          let data = await response.json();
          setForecast(data.list);
          setName(data.city.name)
          return data;
        } 
        catch{
          setError("API ERROR");
          return 0;
        }
        finally{
         setLoading(false);
        }
      }

    
    return (
        <div className='chart-container'>
              <p>Hello! {name}</p>
        </div>
    )
}

export default CityChart
