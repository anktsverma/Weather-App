import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

const Card = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [pincode,setPincode]=useState('');
    const API_key='c6616ab161a88215198908fc859679fe';
  
    

    const submitHandle = async (e) => {
        e.preventDefault()
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${API_key}&units=metric`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
            min_temp:res.data.main.temp_min,
            max_temp:res.data.main.temp_max,
            speed:res.data.wind.speed,
        })

        setCity(res.data.name)

    }   
   
    return (
        <div className="card">
            <form className='form' onSubmit={submitHandle} >
            <label>Enter Pincode:</label>
                <input
                    type='text'
                    required
                    value={pincode}
                    onChange={(event)=>setPincode(event.target.value)}
                />
             
                 <button>Search</button>  
                 {weather && (
                     <div>
                     <div className="content">
                    
                    <div className="col1">
                         <h4>{weather.city}</h4>
                         <h4>{weather.press}</h4>
                         <h4>{weather.temp}°C </h4>
                         <h4>{weather.humidity}%</h4>
                    </div>
                    
                    <div className="col2">
                        
                        
                        <h4>{weather.max_temp}°C</h4>
                        <h4>{weather.descp}</h4>
                        <h4>{weather.min_temp}°C</h4>
                        <h4>{weather.speed} kmph</h4>
                    </div>
                </div>
                   
                     </div>
                
            )}
            </form>
           
        </div>
      );
}
 
export default Card;