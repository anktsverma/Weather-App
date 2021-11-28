import {useState } from "react";
import axios from 'axios'
import Loader from "react-loader-spinner";
import background from '../assets/background.jpg'

const Card = () => {
    const [weather, setWeather] = useState('');
    const [pincode,setPincode]=useState('');
    const [loading,setLoading]=useState(false)
    const [validPin,setValidPin]=useState(false)
    const API_key='c6616ab161a88215198908fc859679fe';
  


    const submitHandler=async(e)=>{
        e.preventDefault();
        setPincode("")
        setValidPin(false)
        setLoading(true);
        const result= await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${pincode},in&appid=${API_key}&units=metric`);
        if(result)setLoading(false)
        setWeather(result.data);
        console.log(result.data)
    }

   
    return (
        <div className="card" style={{backgroundImage:`url(${background})`}}>
            <form className='form' onSubmit={submitHandler} autoComplete="off" >
            <label style={{fontSize:'20px',color:'white'}}>Enter Pincode:</label>
                <input
                    type='text'
                    value={pincode}
                    onChange={(event)=>{
                    setPincode(event.target.value)
                    if(event.target.value.length==6){
                        setValidPin(true)
                    }
                    else{
                        setValidPin(false)
                    }
                    
                   }}
                />
             
                {validPin? <button  disabled={loading?"disabled":""}>{loading?"Loading...":"Search"}</button> :<button disabled style={{backgroundColor:'#ddd'}}>Search</button>}
                 {loading ?
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} >
              <Loader
              type="Oval"
              color="white"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
               </div>:(
                     <div>
                 {weather && (
                <div>
                     <div className="content">
                    
                    <div className="col1">
                         <h4><i class="bi bi-building"></i> {weather.name}</h4>
                         <h4><i class="bi bi-tropical-storm"></i> {weather.main.pressure}</h4>
                         <h4><i class="bi bi-thermometer-half"></i> {weather.main.temp}°C </h4>
                         <h4><i class="bi bi-moisture"></i> {weather.main.humidity}%</h4>
                    </div>
                    
                    <div className="col2">
                        <h4><i class="bi bi-thermometer-high"></i> {weather.main.temp_max}°C</h4>
                        <h4><i class="bi bi-cloud-fill"></i> {weather.weather[0].description}</h4>
                        <h4><i class="bi bi-thermometer-low"></i> {weather.main.temp_min}°C</h4>
                        <h4><i class="bi bi-wind"></i> {weather.wind.speed} kmph</h4>
                    </div>

                </div>
                   
              </div>
                
            )}
            </div>
            )
           }
            </form>
           
        </div>
      );
}
 
export default Card;