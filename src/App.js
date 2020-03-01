import React, {useState, useEffect} from 'react';

import { usePosition } from 'use-position';
import axios from 'axios'
import { GlobalStyle } from './global';
import Main from './Components/Main';
import IconImage from './Components/IconImage';
function App() {

  const { latitude, longitude} = usePosition(false);
  const [weather , setWeather] = useState([])
  const apikey = '639bc0d456b564522009fa1fc1dcedd0'

  useEffect(() => {
    const getWeater = async () => {
      await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&APPID=${apikey}`)
      .then(success => {
        setWeather([success.data])
      })
    }
    if(usePosition === false) {
    
    } else {
       getWeater();
       console.log(weather)
    }
  },[setWeather, latitude, longitude])

  return (
    <>
    <Main>
      {usePosition === false ? <h2> ah nao :( </h2>  :
      weather.map((cities, index) => { 
          return(
          <div key={cities.list[index].id} className={cities.list[index].weather[index].main}>
            <IconImage icon={cities.list[index].weather[index].icon} />
            <span>{parseInt(cities.list[index].main.temp - 273.15) }&#8451;</span>
            <h2>{cities.list[index].name}</h2>
          </div>
          )
      })
      }
    </Main>
    <GlobalStyle/>
  </>
  );
}

export default App;
