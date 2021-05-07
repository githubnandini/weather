import {Grid} from '@material-ui/core'
import useStyles from './data/styles'
import React, {useState, useEffect} from 'react';
import axios from 'axios';



function App() {
  const classes = useStyles();
  let newDate = new Date()
  let currentDate = newDate.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
   ];
   let currentMonth = monthNames[newDate.getMonth()]
   let currentYear = newDate.getFullYear();
   const [date, setDate] = useState(new Date());
   useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
     function tick() {
      setDate(new Date());
     }
     
   const [city, setCity] = useState('delhi');
   const [weatherdata, setWeatherData] = useState();
   const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
   const apiKey = '3323f6e68cfbc697b7d44640669e1ae2';
   function getData() {
       axios.get(baseUrl + `q=${city}&appid=${apiKey}`)
  .then(function (response) {
    // handle success
    var temperature = response.data.main.temp - 273.15
    setWeatherData(temperature);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    alert ("enter valid city name")
  })
    }
   
     useEffect(() => {
       getData();
     }, []);
     
  return (
  <Grid className={classes.bgImage}>
    <Grid className={classes.container}>
    <p className={classes.textDate}>{currentDate + " " + currentMonth + " " + currentYear}</p>
    <p className={classes.textTime}>{date.toLocaleTimeString()}</p>
    <div>
      <Grid className={classes.searchForm}>
        <input className={classes.inputSearch} type="text" value={city} onChange={(e) =>
            setCity(e.target.value )} />
        <button className={classes.searchButton} type="button" onClick={() => getData()}>Search</button>
        </Grid>
      </div>
      <h6 className={classes.textTemperature}>{parseFloat(weatherdata).toFixed(1)}&deg;C</h6>
    </Grid> 
   
  </Grid>
    
  );
}

export default App;
